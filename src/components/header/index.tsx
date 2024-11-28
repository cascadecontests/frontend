'use client';

import { TonConnectButton } from "@/components/ton-connect/button";
import styles from "./styles.module.css";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.title}>Cascade</Link>
                <div className={styles.navigation}>
                    <Link href={"/contests"} className={styles.link}>Contests</Link>
                    <Link href={"/leaderboards"} className={styles.link}>Leaderboards</Link>
                </div>
                <div className={styles.tonconnect}>
                    <TonConnectButton />
                </div>
            </div>
        </header>
    );
}