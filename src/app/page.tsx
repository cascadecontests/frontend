'use client';

import { Card } from "@/components/card";
import styles from "./page.module.css";
import Computer from "@/icons/computer";
import Coin from "@/icons/coin";
import Brain from "@/icons/brain";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1 className={styles.title}>
          Cascade
          <div className={styles.gradient}>
            host, compete & win
          </div>
        </h1>
        <div className={styles.description}>
          <div>
            An open-source platform for <b>creating</b>, <b>hosting</b>
          </div>
          <div>
            and <b>participating</b> in paid or training programming contests
          </div>
        </div>
        <h2 className={styles.cardsTitle}>
          Looking for your next step?
        </h2>
        <div className={styles.cards}>
          <Card
            icon={<Computer />}
            title="Host contests"
            description="Host competitions for your communities"
            linkLabel="Host"
            link="/contest/create"
          />
          <Card
            icon={<Coin />}
            title="Win & earn prizes"
            description="Win paid contests for grab all prize pot"
            linkLabel="Paid contests"
            link="/contests/?filter=paid"
          />
          <Card
            icon={<Brain />}
            title="Train your skills"
            description="Participate in training contests to upgrade your skills in free competitive mode"
            linkLabel="Training contests"
            link="/contests/?filter=training"
          />
        </div>
      </main>
    </div>
  );
}