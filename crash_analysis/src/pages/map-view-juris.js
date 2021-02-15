import MapCanvasJuris from './components/map-canvas-juris';
import { Panel } from 'pivotal-ui/react/panels';

const MapViewJuris = () => {
  return (<Panel {...{ title: 'MapCanvas' }}>
    <MapCanvasJuris />
  </Panel>);
}

export default MapViewJuris;
