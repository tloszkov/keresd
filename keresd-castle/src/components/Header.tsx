import React from "react";
import {Menubar} from "@/components/ui/menubar";
import {Button} from "@/components/ui/button";
import {router} from "next/client";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/ModeToggle";

export default function Header() {
    return (
        <main>
            <Menubar>
                <Link href={"/"}><Button>Home</Button></Link>
                <Link href={"/profile"}><Button>Profile</Button></Link>
                <Link href={"/about"}><Button >About</Button></Link>
                <ModeToggle></ModeToggle>
            </Menubar>
        </main>
    );
}
