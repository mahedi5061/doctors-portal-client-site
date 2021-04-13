import React, { useState } from 'react';
import Footer from '../../SharedComponent/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AppointmentNavbar from '../AppointmentNavbar/AppointmentNavbar';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css'


const Appointment = () => {
    const [bookingDate,setBookingDate]=useState(new Date())
    const handleDateChange=(date) => {
        setBookingDate(date)
    }
    return (
       <>
        <div className="background ">
            <AppointmentNavbar></AppointmentNavbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            </div>
            <BookAppointment date={bookingDate}></BookAppointment>
            <Footer></Footer>
       
       </>
    );
};

export default Appointment;