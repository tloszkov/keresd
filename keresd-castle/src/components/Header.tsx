import React from "react";
import {Menubar} from "@/components/ui/menubar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/ModeToggle";
import {LanguageMenu} from "@/components/ui/LanguageMenu";
import {LogoToggle} from "@/components/ui/LogoToggle";



export default function Header() {
    return (
        <main>
            <Menubar>
                <div className={"flex-1"}>
                    <Link href={"/"}><Button className={"w-1/6 rounded-none"}>Kastély</Button></Link>
                    <Link href={"/news"}><Button className={"w-1/6 rounded-none"}>Hírek</Button></Link>
                    <Link href={"/about"}><Button className={"w-1/6 rounded-none"} >Rólunk</Button></Link>
                </div>
                <div className={"flex"}>
                    <LogoToggle></LogoToggle>
                    <ModeToggle></ModeToggle>
                    <LanguageMenu></LanguageMenu>
                </div>

            </Menubar>
        </main>
    );
}
