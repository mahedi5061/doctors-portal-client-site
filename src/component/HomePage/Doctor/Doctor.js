import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/doctors.png'

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4 style={{color:'#3A4256'}}>Dr. Tanner</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-1956742573</p>
        </div>
    );
};

export default Doctor;