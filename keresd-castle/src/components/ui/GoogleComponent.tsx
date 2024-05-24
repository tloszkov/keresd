'use client';

import React, { useEffect, useRef, useState } from 'react';
require('dotenv').config();

declare global {
    interface Window {
        google: any;
    }
}

interface GoogleMapComponentProps {
    apiKey: string;
}


const GoogleMapComponent: React.FC<GoogleMapComponentProps>= ( apiKey ) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapError, setMapError] = useState<string | null>(null);

    useEffect(() => {
        const ApiKey = apiKey.apiKey;

        if (!apiKey) {
            setMapError("Google Maps API key not found. Please set API_KEY in your .env.local file.");
            return;
        }

        const initMap = () => {
            if (mapRef.current && window.google) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 46.1430812, lng: 24.693336 },
                    zoom: 17,
                });

                new window.google.maps.Marker({
                    position: { lat: 46.1430012, lng: 24.692736 },
                    map: map,
                    title: 'Marker',
                });
            }
        };

        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&loading=async&libraries=places&callback=initMap`;
            script.async = true;
            script.onerror = () => {
                setMapError("Error loading Google Maps API. Please check your API key and network connection.");
            };
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, [apiKey]);

    return (
        <div>
            {mapError && <p style={{ color: 'red' }}>{mapError}</p>}
            <div ref={mapRef} style={{ height: '50vh', width: '100%' }} />
        </div>
    );
};

export default GoogleMapComponent;
