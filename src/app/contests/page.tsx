"use client";

import styles from "./page.module.css";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge";

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
    const formatDate = (date: Date) => {
        const day = date.getDate();
        const year = date.getFullYear();

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthIndex = date.getMonth();
        const month = monthNames[monthIndex];

        const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        return `${day} ${month}, ${year}`;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.container}>
                <h1 className="text-[32px] font-bold mb-3">Public competitions</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30px]">#</TableHead>
                            <TableHead className="w-[360px]">Title</TableHead>
                            <TableHead className="w-[150px]">Host</TableHead>
                            <TableHead className="w-[140px]">Type</TableHead>
                            <TableHead className="w-[160px]">Participants</TableHead>
                            <TableHead className="w-[130px]">Start</TableHead>
                            <TableHead className="w-[130px]">End</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            contests.map((contest, idx) => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-semibold">
                                                {`${idx + 1}.`}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <Link className={styles.name} href={contest.hostURL}>
                                                        {contest.name}
                                                    </Link>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <div className="flex flex-col gap-4">
                                                        <h1 className="font-bold">{contest.name}</h1>
                                                        <p>
                                                            {contest.description}
                                                        </p>
                                                        <div>
                                                            by <Link className={styles.link} href={contest.hostURL}>
                                                                {`@${contest.host}`}
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </TableCell>
                                        <TableCell>
                                            <Link className={styles.link} href={contest.hostURL}>
                                                {`@${contest.host}`}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{contest.type}</Badge>
                                        </TableCell>
                                        <TableCell>{contest.participants}</TableCell>
                                        <TableCell>{formatDate(contest.start)}</TableCell>
                                        <TableCell>{formatDate(contest.end)}</TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}