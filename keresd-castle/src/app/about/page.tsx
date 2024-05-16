import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React from "react";
import {Label} from "@/components/ui/label";

export default function About() {
    return (
            <main>
                <Card>
                    <CardHeader>
                    </CardHeader>
                    <CardContent>
                        <Label className={"font-bold text-2xl"}>
                            Fekvése
                        </Label>
                        <div>
                            Segesvártól délnyugatra 12 km-re, a Dános-patak partján, dombok között áll elrejtve. A helybeliek meglelhetetlen kastélynak nevezik.
                        </div>
                            <br/>
                        <Label className={"font-bold text-2xl"}>
                            Története
                        </Label>
                        <div>
                            A reneszánsz stílusban épült várkastély alapjait még a 15. század közepén rakta le Miklós fia Márk. Az épület négyszögű udvar köré épült, lőrésekkel ellátott háromemeletes kerek tornyát domborművű őrző alakok díszítették. Az emeleti bejáratához balusztrádos lépcső vezetett a régebbi erődítési gyakorlatnak megfelelően.

                            Árkádos szárnyát, mely egyben a kastély legszebb része volt, Bethlen György és felesége, Nagykárolyi Klára kezdte építtetni. 1559-ben bővítették, régi részeit átalakították. Saroktornyának egyik rozettás ablakán feltüntetett monogram szerint: (M. B. 1598), fiuk Bethlen Mihály is részt vett az építtetésben.

                            1675-ben Bethlen Elek emelte erődítéseit és a bástyákat. Ő írta meg a Bethlen család első történetét; a kiadás végett a várkastélyban nyomdát állítottak fel. Itt írta meg Bethlen Farkas is Erdély történetét.

                            Végig a Bethlen család birtoka volt, a 20. század elején még lakták, majd a két világháború között elhagyták. 1948. március 3-án államosították, és a dánosi néptanács birtokába került. A kastély berendezését széthordták, az épület állaga leromlott. A műemlékvédelmi hatóság kétszer is nekikezdett a restaurálásnak, de mindkét esetben abbahagyták, és a kibontott ablak- és ajtókereteket, csempekályhákat, címereket, feliratos kőtáblákat, építőanyagokat és előkészített kőfaragványokat széthordták.

                            2007-ben a Bethlen család erdélyi ága visszakapta a kastélyt. 2008-ban ideiglenes múzeumot rendeztek be, kitisztították a kutat, kijavították a tetőt, bevezették az áramot és bekerítették a parkot. 2012-ben részleges régészeti feltárás kezdődött a Maros Megyei Múzeum közreműködésével. 2013-ban elkezdődött a kőtár és a kiállítóterem berendezése és a kastély kertjében egy látogatói útvonal kialakítása. 2014-ben a Dévai Szent Ferenc Alapítvány vette bérbe a kastélyt.[1]

                        </div>
                            <br/>
                        <Label className={"font-bold text-2xl"}>
                            Leírása
                        </Label>
                        <div>
                            A kastélynak különösen szépek díszesen faragott ablakkeretei és íves ballusztrádos tornácfeljárója is, mely némileg hasonlít a sárospataki Perényi-loggiára.

                            A várkastély jellegét külső megjelenésében és belső részleteiben nagyrészt reneszánsz elemek határozták meg, de fellelhetők régebbről megmaradt középkori részletei is, főként az egykori gótikus várkápolnában.

                            Bástyái közül csak kettő áll.
                        </div>
                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </main>
    );
}

