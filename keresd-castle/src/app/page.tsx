import {Button} from "@/components/ui/button";
import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus turpis, non lacinia urna. Suspendisse potenti. Morbi tempus, nunc eget faucibus volutpat, ex dolor auctor eros, vel aliquet urna massa in diam. Sed vitae eleifend ex, in vehicula augue. Duis sagittis, lacus id mattis aliquam, justo leo feugiat dui, ut tincidunt neque odio at arcu.';


export default function Home() {
  return (

    <main>
        <Card>
            <CardHeader>
                Welcome to Keresd Castle!
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
        {/*<h1>{loremIpsum.substring(0, 1000)}</h1>*/}
    </main>
  );
}
