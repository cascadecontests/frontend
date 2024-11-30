import styles from './not-found.module.css';

import { Separator } from "@/components/ui/separator"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                404
            </div>
            <Separator className={styles.separator} />
            <div className={styles.text}>
                Where did you get this link?
            </div>
        </div >
    );
}