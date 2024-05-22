
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import GoogleMapComponent from "@/components/ui/GoogleComponent";


export default function Header() {
    return (
        <div className="flex" >
            <div className="w-1/4">
                <Card>
                    <CardHeader>
                        <CardTitle>Keresdi Bethlen-kastély</CardTitle>
                        <CardDescription>Castelul Bethlen Criș</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label>Cím: str. Castelul Bethlen nr. 187, Criș 547201</Label>
                    </CardContent>
                        <Label>{"\n"}</Label>
                    <CardContent>
                        <Label>Telefonszám: 0750 684 281</Label>
                    </CardContent>
                    <CardFooter>
                        <p></p>
                    </CardFooter>
                </Card>
            </div>

            <div className={"w-1/2"}>
                <Card>
                    <CardHeader>
                        <CardTitle>A google térképen</CardTitle>
                        <CardDescription>In harta google</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <GoogleMapComponent></GoogleMapComponent>
                    </CardContent>
                    <CardFooter>
                        <p></p>
                    </CardFooter>
                </Card>
            </div>


            <div className="w-1/4">
                <Card>
                    <CardHeader>
                        <CardTitle>Nyitvatartás:</CardTitle>
                        <CardDescription>Ore de deschidere</CardDescription>
                    </CardHeader>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/4">Nap</TableHead>
                                <TableHead className="w-1/4">Óra</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="w-1/4">Hétfő</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Kedd</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Szerda</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Csütörtök</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Péntek</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Szombat</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-1/4">Vasárnap</TableCell>
                                <TableCell className="w-1/4">10.00 - 18.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    );
}
