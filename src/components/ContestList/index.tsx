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
import { Badge } from "../ui/badge";

interface Props {
    contests: Contest[];
}

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

const ContestList = (props: Props) => {

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


    const shortenAddress = (str: string) => {
        if (str.length <= 10) {
            return str;
        }

        const startChars = 8;
        const endChars = 8;

        const start = str.substring(0, startChars);
        const end = str.substring(str.length - endChars);

        return `${start}...${end}`;
    }

    return (
        <div>
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
                        props.contests.map((contest, idx) => {
                            return (
                                <TableRow>
                                    <TableCell>{`${idx + 1}.`}</TableCell>
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
    );
}

export default ContestList;