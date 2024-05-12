import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import React from "react";
import {Globe} from "lucide-react";


export function LanguageMenu() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger><Globe /></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>EN</MenubarItem>
                    <MenubarItem>RO</MenubarItem>
                    <MenubarItem>HU</MenubarItem>
                    <MenubarItem>DE</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}