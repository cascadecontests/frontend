'use client';

import { TonConnectButton } from "@/components/ton-connect/button";
import styles from "./styles.module.css";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { setCookie } from "@/utils/cookies";

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const currentTheme = document.cookie.split('; ').find(row => row.startsWith('theme='));
        if (currentTheme) {
            setTheme(currentTheme.split('=')[1] as 'light' | 'dark');
        }
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.title}>Cascade</Link>
                <div className={styles.navigation}>
                    <Link href={"/contests"} className={styles.link}>Contests</Link>
                    <Link href={"/leaderboards"} className={styles.link}>Leaderboards</Link>
                </div>
                <div className={styles.tonconnect}>
                    <Button onClick={() => {
                        const newTheme = theme === 'dark' ? 'light' : 'dark';
                        setTheme(newTheme);
                        setCookie('theme', newTheme, 30); // Set cookie for 30 days
                        document.documentElement.className = newTheme;
                    }}>
                        Toggle Theme
                    </Button>
                    {/* <TonConnectButton /> */}
                </div>
            </div>
        </header>
    );
}