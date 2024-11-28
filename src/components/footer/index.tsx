import { Icons } from "@/components/icons";
import styles from "./styles.module.css";
import { Button } from "../ui/button";
import GitHub from "@/icons/github";
import { Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
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