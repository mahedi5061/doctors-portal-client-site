import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingAppointmentCard.css'

const BookingAppointmentCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal=()=> {
      setIsOpen(true);
    }
  
    const closeModal=()=>{
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
        <div className="card p-3 card-style">
            <div className="card-body text-center">
                <h5 className="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal}  className="btn-brand">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
            </div>
        </div>
    </div>
    );
};

export default BookingAppointmentCard;