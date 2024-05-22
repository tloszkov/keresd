"use client"

import React, {useEffect, useRef} from 'react';

declare global {
    interface Window {
        google: typeof google;
    }
}

const GoogleMapComponent = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // const apiKey = process.env.API_KEY;
        // console.log(apiKey)

        const initMap = () => {
            if (mapRef.current && window.google) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: {lat: 46.1430812, lng: 24.693336},
                    zoom: 17,
                });

                new window.google.maps.Marker({
                    position: {lat: 46.1430012, lng: 24.692736},
                    map: map,
                    title: 'Marker',
                });
            }
        };

        if (!window.google) {
            const script = document.createElement('script');
            script.src =
                `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ4J9iSZAP4Qtppm0p9TB9minILKP0tzY*`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.body.appendChild(script);
        } else {
            initMap();
        }

        // const loader = new Loader({
        //     apiKey: "AIzaSyCJ4J9iSZAP4Qtppm0p9TB9minILKP0tzY",
        // });
        //
        // loader.load().then(async () => {
        //     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        //     const map = new Map(document.getElementById("map") as HTMLElement, {
        //         center: { lat: 46.1430012, lng: 24.692736 },
        //         zoom: 17,
        //     });
        //
        // });

    }, []);

    return <div ref={mapRef} style={{height: '50vh', width: '100%'}}/>;
};

export default GoogleMapComponent;

