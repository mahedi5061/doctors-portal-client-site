import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faSignOutAlt,faUserPlus, faFileMedicalAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';
 

const Sidebar = () => {
    const [login,setLogin]=useContext(userContext)
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:7000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: login.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar  justify-content-between  col-md-5 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
        <li>
                <Link to="/home" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                </Link>
            </li>

            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                </Link>
            </li>
            {
                isDoctor && <div>
                <li>
                <Link to="/appointment" className="text-white">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                </Link>
            </li>
            <li>
                <Link to="/doctor/patients" className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                </Link>
            </li>
            <li>
                <Link to="/doctor/prescriptions" className="text-white">
                    <FontAwesomeIcon icon={faFileMedicalAlt} /> <span>Prescriptions</span>
                </Link>
            </li>
            <li>
                <Link to="/doctor/addDoctor" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                </Link>
            </li>
                </div>
            }
            <li>
                <Link to="/doctor/setting" className="text-white" >
                  <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;