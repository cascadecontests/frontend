import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface Props {
    type: 'warning' | 'info',
    url?: string,
    message: string,
    icon: React.ReactNode,
}

const gradient_warning = "bg-gradient-to-r from-[#ec4a2d] to-[#ffa71a]";
const gradient_info = "bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff]";

const Notification = (props: Props) => {
    if (props.url === undefined) {
        return (
            <div
                className={"h-[40px] flex justify-center items-center gap-2 text-white-50 text-base " + (props.type == 'warning' ? gradient_warning : gradient_info)}
            >
                {props.icon}
                {props.message}
            </div >
        );
    }

    return (
        <Link
            href={props.url}
            target="_blank" rel="noopener noreferrer"
            className={"h-[40px] flex justify-center items-center gap-2 font-semibold text-white-50 text-base " + (props.type == 'warning' ? gradient_warning : gradient_info)}
        >
            {props.icon}
            {props.message}
            <ChevronRight />
        </Link>
    );
}

export { Notification };