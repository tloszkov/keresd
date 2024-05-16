'use client'
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
                    <Link href={"/"}><Button className={"w-1/6 rounded-none"}>Kastély</Button></Link>
                    <Link href={"/images"}><Button className={"w-1/6 rounded-none"}>Képek</Button></Link>
                    <Link href={"/about"}><Button className={"w-1/6 rounded-none"} >Rólunk</Button></Link>
                </div>
                <div className={"flex"}>
                    <ModeToggle></ModeToggle>
                    <LanguageMenu></LanguageMenu>
                </div>

            </Menubar>
        </main>
    );
}
