'use client';

import RightArrow from "@/icons/right-arrow";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
    type: 'warning' | 'info';
    message: string;
    href?: string;
    icon?: React.ReactNode;
}

export const Notification = (props: Props) => {
    if (props.href === undefined) {
        return (
            <div className={`${styles.container} ${props.type === 'warning' ? styles.warning : styles.info}`}>
                {props.icon}
                {props.message}
            </div>
        );
    }

    return (
        <Link
            href={props.href}
            target="_blank" rel="noopener noreferrer"
            className={`${styles.container} ${props.type === 'warning' ? styles.warning : styles.info}`}
        >
            {props.icon}
            {props.message}
            <div className={styles.arrow}>
                <RightArrow />
            </div>
        </Link>
    );
}