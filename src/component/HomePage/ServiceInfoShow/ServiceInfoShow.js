import React from 'react';
import './ServiceInfoShow.css'

const ServiceInfoShow = (props) => {
    const {title,icon,description} = props.service;
    return (
        <div className="col-md-4 cardInfoMain">
        <img src={icon}  style={{ paddingBottom:'25px',height:'100px'}}></img>
        <h4>{title}</h4><br></br>
        <p className="text-secondary" style={{textAlign:'justify'}}>{description}</p> 
        </div>
    );
};

export default ServiceInfoShow;