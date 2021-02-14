import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from 'react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {MapboxLayer} from '@deck.gl/mapbox';

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

              const myDeckLayer = new MapboxLayer({
                id: 'my-scatterplot',
                type: ScatterplotLayer,
                data: [
                  {position: [-77.79218893867733, 37.82963522630058], size: 1000}
                ],
                getPosition: d => d.position,
                getRadius: d => d.size,
                getColor: [255, 0, 0]
              });
            
              
              map.on('load', () => {
                map.addLayer(myDeckLayer);
                
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
