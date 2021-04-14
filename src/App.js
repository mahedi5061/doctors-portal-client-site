import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddDoctor from "./component/AddDoctor/AddDoctor";
import Appointment from "./component/AppointmentMain/Appointment.js/Appointment";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import Prescriptions from "./component/Dashboard/Prescriptions/Prescriptions";
import Home from "./component/HomePage/Home/Home";
import Login from "./component/Login/Login";
import Patients from "./component/Patients/Patients";
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
           <PrivateRoute path="/appointment">
             <Appointment></Appointment>
           </PrivateRoute>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/dashboard">
             <Dashboard></Dashboard>
           </Route>
           
           <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
           </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route path="/prescriptions">
            <Prescriptions></Prescriptions>
          </Route>

          <Route path="/prescriptions/:id">
            <Prescriptions></Prescriptions>
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
