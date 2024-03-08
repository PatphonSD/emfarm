"use client";

import Link from "next/link";
import Container from "./container";
import clsx from "clsx";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLink } from "@/constant/navbar-link";
import { Urbanist } from "next/font/google";
import { ArrowTopRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-20 py-4 border-b bg-white">
      <Container asSub className="flex justify-between items-center">
        <Link
          href={"/"}
          className={clsx("font-semibold text-xl", urbanist.className)}
        >
          emfarm.space
        </Link>
        <div className="hidden md:block">
          {navbarLink.map((item, idx) => (
            <Link
              className={clsx(buttonVariants({ variant: "ghost" }))}
              href={item.link}
              key={idx}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="block md:hidden">
            <HamburgerMenuIcon className="w-4 h-4" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-start">
              <SheetTitle>เมนู</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-2 text-lg">
              {navbarLink.map((item, idx) => (
                <Link
                  onClick={() => setOpen(false)}
                  className="flex justify-between items-center"
                  href={item.link}
                  key={idx}
                >
                  <p>{item.name}</p>
                  <ArrowTopRightIcon />
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
}
