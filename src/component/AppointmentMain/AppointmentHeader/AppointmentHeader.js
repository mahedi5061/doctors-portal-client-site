import React from 'react';
import chair from '../../../images/chair.png';
import './AppointmentHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 

const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center background">
        <div className="col-md-4 react-calendar offset-md-1">
            <h2 className="appointment  ms-5">APPOINTMENT</h2><br></br>
            <Calendar
            onChange={handleDateChange}
            value={new Date()}
      />
        </div>
        <div className="col-md-6">
        <img src={chair} className="imageSize "></img>

        </div>
            
        </main>
    );
};

export default AppointmentHeader;