import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Platform_District from "./platform_district/platform_district.js";
import Edjust_District from "./edjust_district/edjust_district.js";
//only need to duplicate the route for other pages of the app
function App() {
  return (
    <Switch>
      <Route exact path="/platform_district">
        <Platform_District/>
      </Route>
      <Route exact path="/edjust_district">
      <Edjust_District/>
    </Route>
    </Switch>

  );
}

export default App;
