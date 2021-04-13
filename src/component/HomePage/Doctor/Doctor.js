import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
 

const Doctor = ({doctor}) => {
const {doctorName,phone}=doctor;
 
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:'200px'}} src={`data:image/jpeg;base64,${doctor?.image?.img}`} />
            <h4 style={{color:'#3A4256'}}>{doctorName}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>{phone}</p>
        </div>
    );
};

export default Doctor;