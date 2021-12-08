import Home from './page/Home.jsx';
import Login from './page/Login.jsx';
import Reservation from './page/Reservation.jsx';
import Movie from './page/Movie.jsx';
import Theater from './page/Theater.jsx';
import Seat from './page/Seat.jsx'
import Event from './page/Event.jsx';
import Store from './page/Store.jsx';
import Benefit from './page/Benefit.jsx';
import Pay from './page/Pay.jsx';
import Mypage from './page/Mypage.jsx';
import Eternals from './page/Eternals.jsx';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import PrivateRoute from './utils/PrivateRoute.js';
import PublicRoute from './utils/PublicRoute.js';
import { getToken, removeUserSession, setUserSession } from './utils/Common.js';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios.post(`http://localhost:3000//verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
    return (
      <div className = "App">
        
        <BrowserRouter>
          <Switch>
          <PublicRoute exact={true} path={"/Login"} component={Login} />
          <PrivateRoute exact={true} path={"/Mypage"} component={Mypage} />
          <PrivateRoute exact={true} path={"/Pay"} component={Pay} />
          <PrivateRoute exact={true} path={"/Eternals"} component={Eternals} />
          <PrivateRoute exact={true} path={"/Movie"} component={Movie} />
          <PrivateRoute exact={true} path={"/Reservation"} component={Reservation} />
          <PrivateRoute exact={true} path={"/Theater"} component={Theater} />
          <PrivateRoute exact={true} path={"/Seat"} component={Seat} />
          <Route exact={true} path={"/"} component={Home}  />
          <PrivateRoute exact={true} path={"/Event"} component={Event} />
          <PrivateRoute exact={true} path={"/Store"} component={Store} />
          <PrivateRoute exact={true} path={"/Benefit"} component={Benefit} />
          </Switch>
        </BrowserRouter>
      </div>
  
    );
}


export default App;