import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React from "react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export default function About() {
    return (
            <main>
                <Card>
                    <CardHeader>
                        About!
                    </CardHeader>
                    <CardContent>
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem></CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </main>
    );
}

