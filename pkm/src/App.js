import Home from './page/Home.jsx';
import Login from './page/Login.jsx';
import Reservation from './page/Reservation.jsx';
import Movie from './page/Movie.jsx';
import Theater from './page/Theater.jsx';
import Event from './page/Event.jsx';
import Store from './page/Store.jsx';
import Benefit from './page/Benefit.jsx';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className = "App">
        
        <BrowserRouter>
          <Switch>
          <Route exact={true} path={"/Login"} component={Login} />
          <Route exact={true} path={"/Movie"} component={Movie} />
          <Route exact={true} path={"/Reservation"} component={Reservation} />
          <Route exact={true} path={"/Theater"} component={Theater} />
          <Route exact={true} path={"/"} component={Home}  />
          <Route exact={true} path={"/Event"} component={Event} />
          <Route exact={true} path={"/Store"} component={Store} />
          <Route exact={true} path={"/Benefit"} component={Benefit} />
          </Switch>
        </BrowserRouter>
      </div>
  
    );
  }
  
}

export default App;