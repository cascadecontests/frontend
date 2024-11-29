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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";

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
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A training contest to enhance your skills in competitive programming."
    },
    {
        name: "hackathon",
        host: "reilix",
        hostURL: "https://github.com/re1l1x",
        type: "Free",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "Join us for a weekend of coding, collaboration, and creativity."
    },
    {
        name: "canary",
        host: "whoo",
        hostURL: "https://devcommunity.org",
        type: "Paid",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A paid contest focusing on advanced algorithms and problem-solving."
    },
    {
        name: "marmot contest #3",
        host: "no/one",
        hostURL: "https://innovatorsinc.com",
        type: "Paid",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "Challenge yourself in this exciting paid contest with great prizes."
    },
    {
        name: "trenbolon contest",
        host: "ccc",
        hostURL: "https://creativeminds.com",
        type: "Training",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A training contest designed to prepare participants for future challenges."
    },
    {
        name: "hack-ai",
        host: "ccc",
        hostURL: "https://futuretech.com",
        type: "Paid",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A paid contest focused on AI and machine learning challenges."
    },
    {
        name: "web",
        host: "ccc",
        hostURL: "https://webwizards.com",
        type: "Free",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A free contest for web development enthusiasts."
    },
    {
        name: "canary",
        host: "ccc",
        hostURL: "https://appinnovators.com",
        type: "Free",
        participants: "129",
        start: new Date("2024-01-12T12:00:00"),
        end: new Date("2024-01-14T18:00:00"),
        description: "A free contest aimed at fostering innovation in app development."
    },
];

export default function Contests() {
    const [paidState, setPaidState] = useState<"paid" | "training" | null>(null);

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

    const filterContests = (): Contest[] => {
        if (!paidState) {
            return contests;
        }

        return contests.filter(contest => contest.type.toLowerCase() == paidState);
    }

    const addGetParameterToCurrentUrl = (key: string, value: string) => {
        const href = window.location.href;
        const url = new URL(href);
        url.searchParams.set(key, value);

        window.history.pushState({}, '', url);
    }

    const removeGetParameterFromCurrentUrl = (key: string) => {
        const href = window.location.href;
        const url = new URL(href);
        url.searchParams.delete(key);

        window.history.pushState({}, '', url);
    }

    const getParameterFromCurrentUrl = (key: string): string | null => {
        const href = window.location.href;
        const url = new URL(href);
        const params = new URLSearchParams(url.search);

        return params.get(key);
    }

    useEffect(() => {
        const filter = getParameterFromCurrentUrl("filter");
        if (filter === "paid" || filter === "training") {
            setPaidState(filter);
        }
    }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Head>
                <title>
                    Contests
                </title>
            </Head>
            <div className={styles.container}>
                <h1 className="text-[32px] font-bold mb-3">Public competitions</h1>
                <div className="flex flex-row gap-[15px] mb-3">
                    <Button
                        variant={paidState === "paid" ? "colorfullblue" : "secondary"}
                        onClick={() => {
                            if (paidState === "paid") {
                                removeGetParameterFromCurrentUrl("filter");
                                setPaidState(null);
                            } else {
                                addGetParameterToCurrentUrl("filter", "paid");
                                setPaidState("paid");
                            }
                        }}
                    >
                        Paid
                    </Button>
                    <Button
                        variant={paidState === "training" ? "colorfullblue" : "secondary"}
                        onClick={() => {
                            if (paidState === "training") {
                                removeGetParameterFromCurrentUrl("filter")
                                setPaidState(null);
                            } else {
                                addGetParameterToCurrentUrl("filter", "training");
                                setPaidState("training");
                            }
                        }}
                    >
                        Training
                    </Button>
                </div>
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
                            filterContests().map((contest, idx) => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-semibold">
                                                {`${idx + 1}.`}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <HoverCard>
                                                <HoverCardTrigger className={styles.name} href={contest.hostURL}>
                                                    {contest.name}
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <div className="flex flex-col gap-4">
                                                        <h1 className="font-bold">{contest.name}</h1>
                                                        <Separator />
                                                        <p>
                                                            {contest.description}
                                                        </p>
                                                        <div className="font-bold">
                                                            Hosted by <Link className={styles.link} href={contest.hostURL}>
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
                                        <TableCell>
                                            <div className="flex flex-row gap-1">
                                                <div className="font-semibold">
                                                    {contest.participants}
                                                </div>
                                                <div>
                                                    /
                                                </div>
                                                <div>
                                                    300
                                                </div>
                                            </div>
                                        </TableCell>
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