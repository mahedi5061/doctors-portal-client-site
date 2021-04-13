import React from 'react';
import BusinessInfoShow from '../BussinessInfoShow/BusinessInfoShow';
import { faClock,faMapMarkerAlt,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const business=[
        {
            title: 'Opening Hours',
            description: 'weekly 7 days open. ',
            icon: faClock,
            backgroundColor:'#1CC7C1'
        },
        {
            title: 'visit our location',
            description: 'kandirpar,comilla,Bangladesh. ' ,
            icon: faMapMarkerAlt,
            backgroundColor:'#3A4256'
        },
        {
            title: 'contact us now',
            description: '01700772420',
            icon: faPhone,
            backgroundColor:'#1CC7C1'
        }
    ]
    return (
       
        <section className="d-flex justify-content-center">
             <div className="w-75 row">
         {
                business.map(bussInfo=><BusinessInfoShow bussInfo={bussInfo}></BusinessInfoShow>)
            }
         </div>
        </section>
        
    );
};

export default BusinessInfo;