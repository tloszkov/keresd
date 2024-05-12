import React from "react";
import {Menubar} from "@/components/ui/menubar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/ModeToggle";
import {LanguageMenu} from "@/components/ui/LanguageMenu";

export default function Header() {
    return (
        <main>
            <Menubar>
                <div className={"flex-1"}>
                    <Link href={"/"}><Button>Home</Button></Link>
                    <Link href={"/profile"}><Button>Profile</Button></Link>
                    <Link href={"/about"}><Button >About</Button></Link>
                </div>
                <div className={"flex"}>
                    <ModeToggle></ModeToggle>
                    <LanguageMenu></LanguageMenu>
                </div>

            </Menubar>
        </main>
    );
}
