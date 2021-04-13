import React from 'react';
import './Testimonial.css'

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text">{quote}</p>
            </div>
            <div className=" d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-style">{name}</h6>
                    <p className="m-0 text-secondary">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;