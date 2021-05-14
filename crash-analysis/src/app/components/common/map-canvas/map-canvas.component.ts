import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import { Deck } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import { MapboxLayerProps } from '@deck.gl/mapbox/mapbox-layer';

@Component({
  selector: 'app-map-canvas',
  templateUrl: './map-canvas.component.html',
  styleUrls: ['./map-canvas.component.scss'],
})
export class MapCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('mapEl', { static: true })
  mapEl!: ElementRef<HTMLDivElement>;
  map!: mapboxgl.Map;
  constructor() {}

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    mapboxgl!.accessToken =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    this.map = new mapboxgl.Map({
      container: this.mapEl.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 3,
      center: [-92.7335869233902, 39.40892456030255], // start at USA zoom level
    });
    // Add navigation control (the +/- zoom buttons)
    this.map.addControl(
      new mapboxgl.NavigationControl({
        showZoom: true,
        showCompass: true,
        visualizePitch: true,
      }),
      'top-right'
    );

    this.map.on('move', () => {
      console.log(
        this.map.getCenter(),
        this.map.getZoom(),
        this.map.getBearing(),
        this.map.getPitch()
      );
    });

    const myDeckLayer = new MapboxLayer({
      id: 'my-scatterplot',
      type: ScatterplotLayer,
      data: [{ position: [-77.79218893867733, 37.82963522630058], size: 1000 }],
      getPosition: (d: any) => d.position,
      getRadius: (d: any) => d.size,
      getColor: [255, 0, 0],
    });

    this.map.on('load', () => {
      this.map.addLayer(myDeckLayer);

      // fly to virginia state
      /*
      map.flyTo({
      center: [-77.79218893867733, 37.82963522630058],
      zoom: 6,
      speed: 0.3
      });
      */
      this.map.flyTo({
        center: [-77.79218893867733, 37.82963522630058],
        zoom: 6,
        //pitch: 50,
        speed: 0.3,
      });
    });

    // fix to fill the mapbox to full size during map load
    /*
    setTimeout(() => {
      this.map.resize();
    }, 1000);
    */
  }

  render() {
    this.map.resize();
  }
}
