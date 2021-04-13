import React, { useContext, useEffect, useState } from 'react';
import  AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
 import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
 import {userContext} from '../../../App'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
     const [login, setLogin]=useContext(userContext)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    
    console.log(login.email)
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    
    useEffect(() => {
        fetch('http://localhost:7000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate,email:login.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
        
            <div style={containerStyle} className="row">
              
                <div className="col-md-4 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-4 ">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;