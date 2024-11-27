import Link from "next/link";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-white-50">
            <hr className="w-[65vw]" />
            <div className="flex justify-center items-center justify-between w-[65vw] mt-4 mb-4">
                <div>
                    <div>Created by <Link href='https://github.com/jus1d' className="transition duration-300 font-semibold hover:text-blue-700">@ndbtea</Link></div>
                </div>
                <div>
                    <Button size="icon" variant="ghost" asChild>
                        <Link href="mailto:artfa63@gmail.com">
                            <Mail />
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    );
}

export { Footer };