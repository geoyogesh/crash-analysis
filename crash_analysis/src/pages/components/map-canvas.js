import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const MapCanvas = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center:  [-77.79218893867733, 37.82963522630058],
            zoom: 6
            });

            // Add navigation control (the +/- zoom buttons)
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

            map.on('move', () => {
                console.log(map.getCenter());
              });
            // Clean up on unmount
            return () => map.remove();
      }, []);

    return ( 
            <div>
                <div ref={mapContainerRef} className="mapContainer"/>
            </div>);
}

export default MapCanvas;
