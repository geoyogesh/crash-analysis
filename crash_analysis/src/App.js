import logo from './logo.svg';
import './App.css';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Icon } from 'pivotal-ui/react/iconography';
import MapView from "./pages/map-view";
import TableView from "./pages/table-view";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import Domains from './pages/domains';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [activeRoute, setActiveRoute]= useState( '/' );

  useEffect(() => {
  }, []);

  return (


    <Router>
      <div style={{ position: 'relative', height: '100vh' }}>
        <Siteframe {...{
          headerProps: {
            logo: <div className="ptl pbl pll" style={{ fontSize: '40px' }}><Icon src="pivotal_ui_inverted" style={{ fill: 'currentColor' }} /></div>,
            companyName: 'Crash ',
            productName: 'Analysis'
          },
          sidebarProps: {
            primaryLinks: [
              { text: 'Home', link: '/', active: activeRoute === '/'},
              { text: 'Map', link: '/map' , active: activeRoute === '/map'},
              { text: 'Table', link: '/table', active: activeRoute === '/table' },
              { text: 'About us', link: '/about-us' , active: activeRoute === '/about-us'}
            ],
            secondaryLinks: [
              { text: 'Docs', link: '/docs' }, 
              { text: 'Contact us', link: '/contact-us' }
            ],
            renderLink: ({ text, link }) => <Link to={link} onClick={() => setActiveRoute(link)}>{text}</Link>
          }
        }}>
          <div className="bg-light-gray pal" style={{ height: '100%' }}>
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
                <MapView />
              </Route>
            </Switch>
          </div>


        </Siteframe>
      </div>
    </Router>
  );
}

export default App;
