import React,{ Fragment } from 'react';
import { Scene, Router} from 'react-native-router-flux'

import Home from './src/Views/Home.View'
import Footer from './src/components/Footer'






export default function App() {
  return (
    <Fragment>
        <Router>
          <Scene tabs hideTabBar key="root">
            <Scene modal key="Home" component={Home} hideNavBar gestureEnable={false} initial/>
          </Scene>
        </Router>
    </Fragment>
  )
}

