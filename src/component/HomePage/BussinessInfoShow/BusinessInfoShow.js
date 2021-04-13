import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessInfoShow.css';

const BusinessInfoShow = (props) => {
     const {title,description,icon,backgroundColor}=props.bussInfo;
    return (
        <section  className="col-md-4">
       <div className="d-flex justify-content-center" style={{ backgroundColor:backgroundColor,width:'455px',padding:'40px',borderRadius:'5px'}}>
            
        <div>
        <FontAwesomeIcon icon={icon} style={{fontSize:'40px',color:'white'}}></FontAwesomeIcon>
        </div>
        <div className="title-description">
        <h5>{title}</h5>
        <small>{description}</small>
        </div>  
       </div>  
        </section>
    );
};

export default BusinessInfoShow;