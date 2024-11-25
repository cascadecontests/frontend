"use client";

import ContestList from "@/components/ContestList";
import styles from "./page.module.css";

interface Contest {
    name: string;
    description: string;
    host: string;
    hostURL: string;
    type: string;
    participants: string;
    start: Date;
    end: Date;
}

const contests: Contest[] = [
    {
        name: "canary-o1",
        host: "ndbtea",
        hostURL: "https://ndbtea.xyz",
        type: "Training",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A training contest to enhance your skills in competitive programming."
    },
    {
        name: "hackathon",
        host: "reilix",
        hostURL: "https://github.com/re1l1x",
        type: "Free",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "Join us for a weekend of coding, collaboration, and creativity."
    },
    {
        name: "canary",
        host: "whoo",
        hostURL: "https://devcommunity.org",
        type: "Paid",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A paid contest focusing on advanced algorithms and problem-solving."
    },
    {
        name: "marmot contest #3",
        host: "no/one",
        hostURL: "https://innovatorsinc.com",
        type: "Paid",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "Challenge yourself in this exciting paid contest with great prizes."
    },
    {
        name: "trenbolon contest",
        host: "ccc",
        hostURL: "https://creativeminds.com",
        type: "Training",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A training contest designed to prepare participants for future challenges."
    },
    {
        name: "hack-ai",
        host: "ccc",
        hostURL: "https://futuretech.com",
        type: "Paid",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A paid contest focused on AI and machine learning challenges."
    },
    {
        name: "web",
        host: "ccc",
        hostURL: "https://webwizards.com",
        type: "Free",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A free contest for web development enthusiasts."
    },
    {
        name: "canary",
        host: "ccc",
        hostURL: "https://appinnovators.com",
        type: "Free",
        participants: "129 / 300",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A free contest aimed at fostering innovation in app development."
    },
];

export default function Contests() {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.container}>
                <h1 className="text-[32px] font-bold text-black-900">Public competitions</h1>
                <ContestList contests={contests} />
            </div>
        </div>
    );
}