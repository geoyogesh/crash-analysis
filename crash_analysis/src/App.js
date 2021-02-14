import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {DefaultButton} from 'pivotal-ui/react/buttons';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import {Icon} from 'pivotal-ui/react/iconography';
import {Panel} from 'pivotal-ui/react/panels';
import MapView from "./pages/map-view";
import TableView from "./pages/table-view";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Domains from './pages/domains';

function App() {
  return (
    
    
<Router>
    <div style={{position: 'relative', height: '100vh'}}>
  <Siteframe {...{
    headerProps: {
      logo: <div className="ptl pbl pll" style={{fontSize: '40px'}}><Icon src="pivotal_ui_inverted" style={{fill: 'currentColor'}}/></div>,
      companyName: 'Crash ',
      productName: 'Analysis'
    },
    sidebarProps: {
      primaryLinks: [
        {text: 'Home', link: '/'}, 
        {text: 'Map', link: '/map'},
        {text: 'Table', link: '/table'},
        {text: 'About us', link: '/about-us'}
      ],
      secondaryLinks: [{text: 'Docs', link: '/docs'}, {text: 'Contact us', link: '/contact-us'}],
      renderLink: ({text, link}) => <Link  to={link}>{text}</Link>
    }
  }}>
    <div className="bg-light-gray pal" style={{height: '100%'}}>
      <Switch>
          <Route path="/about-us">
            <Domains />
          </Route>
          <Route path="/map">
            <MapView />
          </Route>
          <Route path="/table">
            <TableView />
          </Route>
          <Route path="/">
            <Domains />
          </Route>
        </Switch>
    </div>

    
  </Siteframe>
</div>
</Router>
  );
}

export default App;
