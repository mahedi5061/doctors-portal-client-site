import React from 'react';
import ServiceInfoShow from '../ServiceInfoShow/ServiceInfoShow';
import './Services.css'

const Services = () => {
    const servicesInfo =[
        {
            title:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc purus, sollicitudin id velit vel, sagittis molestie nisl.',
            icon:'https://i.ibb.co/FmmsRJK/001-dental.png'
        },
        {
            title:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc purus, sollicitudin id velit vel, sagittis molestie nisl.',
            icon:'https://i.ibb.co/VHjmqM6/tooth-1.png'
        },
        {
            title:'Teeth Whitening',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc purus, sollicitudin id velit vel, sagittis molestie nisl.',
            icon:'https://i.ibb.co/ckxnYxB/tooth.png'
        }
    ]
    return (
        <>
        <h5 className="d-flex justify-content-center ourServices">Our Services</h5>
        <h2 className="d-flex justify-content-center serviceProvide">Service with Provide</h2>
           <div className="d-flex justify-content-center">
            <div className="row w-75 d-flex align-items-center cardInfo"> 
            {
                servicesInfo.map((service=><ServiceInfoShow service={service}></ServiceInfoShow>))
            }
            </div>
           </div> 
        </>
    );
};

export default Services;