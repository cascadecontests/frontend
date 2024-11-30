'use client';

import { Icons } from "@/components/icons";
import styles from "./styles.module.css";
import { Button } from "../ui/button";
import { Mail, Moon, Sun, Lightbulb, LightbulbOff } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useState, useEffect } from "react";
import { setCookie } from "@/utils/cookies";

export const Footer = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const currentTheme = document.cookie.split('; ').find(row => row.startsWith('theme='));
        if (currentTheme) {
            setTheme(currentTheme.split('=')[1] as 'light' | 'dark');
        }
    }, []);

    const handleToggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        setCookie('theme', next, 30);
        document.documentElement.className = next;
    }

    return (
        <div className={styles.footer}>
            <hr className={styles.separator} />
            <div className={styles.container}>
                <div className={styles.label}>
                    Created by <Link
                        href="https://github.com/jus1d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >@ndbtea</Link>
                </div>
                <div className={styles.icons}>
                    <Button size="icon" variant="ghost" onClick={handleToggleTheme}>
                        {
                            // theme === "dark" ? <Sun /> : <Moon />
                            theme === "dark" ? <Lightbulb /> : <LightbulbOff />
                        }
                    </Button>
                    <Separator orientation="vertical" className={styles.vsep} />
                    <Button size="icon" variant="ghost" asChild>
                        <Link href="https://github.com/cascadecontests" target="_blank" rel="noopener noreferrer">
                            <Icons.gitHub className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="icon" variant="ghost" asChild>
                        <Link href="mailto:artfa63@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Mail />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}