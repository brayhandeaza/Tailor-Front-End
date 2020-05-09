import React,{ Fragment } from 'react';
import { Scene, Router} from 'react-native-router-flux'

// Views
import Home from './src/Views/Home.View'
import Appointment from './src/Views/Appointments.View'
import Gallery from './src/Views/Gallery.View'
import Profile from './src/Views/Profile.Vew'






export default function App() {
  return (
    <Fragment>
        <Router>
          <Scene tabs hideTabBar key="root">
            <Scene modal key="Home" component={Home} hideNavBar gestureEnable={false} initial/>
            <Scene modal key="Appointments" component={Appointment} hideNavBar gestureEnable={false}/>
            <Scene modal key="Gallery" component={Gallery} hideNavBar gestureEnable={false}/>
            <Scene modal key="Profile" component={Profile} hideNavBar gestureEnable={false}/>
          </Scene>
        </Router>
    </Fragment>
  )
}

