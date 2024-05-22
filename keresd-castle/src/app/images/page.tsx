'use client'
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from 'next/image'
import Darabont1 from "../../../src/app/images/simages/Darabont1.jpg"
import Darabont2 from "../../../src/app/images/simages/Darabont2.png"
import Darabont3 from "../../../src/app/images/simages/Darabont3.png"
import Darabont5 from "../../../src/app/images/simages/Darabont5.png"
import Darabont6 from "../../../src/app/images/simages/Darabont6.png"
import Darabont7 from "../../../src/app/images/simages/Darabont7.png"

export default function Profile() {
    return (
    <main>
        <Card>
            <CardHeader>
                KÉPEK!
            </CardHeader>
            <CardContent className={"flex justify-center"}>
                <Carousel className={"w-1/2"}>
                    <CarouselContent className={"w-1/2"}>
                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont1}
                                    alt="Darabont1Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont2}
                                    alt="Darabont2Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont3}
                                    alt="Darabont2Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont5}
                                    alt="Darabont5Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont6}
                                    alt="Darabont6Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div>
                                <Image
                                    src={Darabont7}
                                    alt="Darabont7Nagy"
                                    width={100} // Specify the width
                                    height={200} // Specify the height
                                    layout="responsive" // This makes the image scale with the parent element
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext/>
                    <CarouselPrevious/>
                </Carousel>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </main>
    );
};