import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./component/AppointmentMain/Appointment.js/Appointment";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import Home from "./component/HomePage/Home/Home";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
export const userContext = createContext();

function App() {
  const [login, setLogin] = useState({});
  return (
    <userContext.Provider value={[login, setLogin]}>
       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/appointment">
             <Appointment></Appointment>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/dashboard">
             <Dashboard></Dashboard>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>
       </userContext.Provider>
  );
}

export default App;
