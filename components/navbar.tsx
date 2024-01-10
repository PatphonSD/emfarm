import Link from "next/link";
import Container from "./container";
import clsx from "clsx";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-20 py-4 bg-white">
            <Container asSub className="flex justify-between items-center">
                <Link href={"/"} className="font-bold text-lg">emfarm.space</Link>
                <div>
                    <Link className={clsx(buttonVariants({variant : "ghost"}))} href={"/product"}>ผลิตภัณฑ์</Link>
                    <Link className={clsx(buttonVariants({variant : "ghost"}))} href={"/pi"}>ประวัติ</Link>
                </div>
            </Container>
        </nav>
    )
}