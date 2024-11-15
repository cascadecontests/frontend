"use client";

import ContestList from "@/components/ContestList";
import styles from "./page.module.css";

interface Contest {
    name: string;
    host: string;
    hostURL: string;
    address: string;
    start: Date;
    end: Date;
}

const contests: Contest[] = [
    {
        name: "Canary Contest",
        host: "ndbtea",
        hostURL: "https://ndbtea.xyz",
        address: "UQBKplAgUpM8oTuQftmU3Cc7lB-gxDqACP0cfxmYZZkejvE7",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Hackathon",
        host: "reilix",
        hostURL: "https://github.com/re1l1x",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nR",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Game Jam o1",
        host: "whoo",
        hostURL: "https://devcommunity.org",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nS",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Design Sprint",
        host: "no/one",
        hostURL: "https://innovatorsinc.com",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nT",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Comp. Sci. Basics",
        host: "ccc",
        hostURL: "https://creativeminds.com",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nU",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Hack-AI",
        host: "ccc",
        hostURL: "https://futuretech.com",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nV",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "web",
        host: "ccc",
        hostURL: "https://webwizards.com",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nW",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
    {
        name: "Mobile App Challenge",
        host: "ccc",
        hostURL: "https://appinnovators.com",
        address: "UQCR1zBW4DUjLwmq-CQqHVHuqYtqW-u_isDJ5SHQKhpL21nX",
        start: new Date("2023-01-12T12:00:00"),
        end: new Date("2023-01-14T18:00:00"),
    },
];

export default function Contests() {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.container}>
                <h1>Public</h1>
                <ContestList contests={contests} />
            </div>
        </div>
    );
}