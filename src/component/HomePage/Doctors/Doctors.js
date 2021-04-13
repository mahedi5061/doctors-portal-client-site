import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:7000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[doctors])
    
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-style mb-5">Our Doctors</h5>
            <div className="row">
             
                 {
                     doctors.map(doctor=><Doctor doctor={doctor}></Doctor>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Doctors;