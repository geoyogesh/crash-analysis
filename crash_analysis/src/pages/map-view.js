import MapCanvas from './components/map-canvas';
import {Panel} from 'pivotal-ui/react/panels';

const MapView = () => {
    return ( <Panel {...{title: 'MapCanvas'}}>
    <MapCanvas/>
  </Panel> );
}

export default MapView;
