'use client';

import { TonConnectButton } from "@/components/ton-connect-button";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-white-50 flex justify-center sticky top-0">
            <div className="flex justify-between items-center w-[65vw] h-[70px]">
                <Link href="/" className="w-[160px] font-bold text-xl">
                    Cascade
                </Link>
                <div className="flex gap-10">
                    <Button asChild variant="ghost">
                        <Link href="/contests" className="text-[16px] font-semibold">Contests</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/leaderboard" className="text-[16px] font-semibold">Leaderboard</Link>
                    </Button>
                </div>
                <div className="w-[160px] flex justify-end">
                    <TonConnectButton />
                </div>
            </div>
        </header>
    );
}

export { Header };