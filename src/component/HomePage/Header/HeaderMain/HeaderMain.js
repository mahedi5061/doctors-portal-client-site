import React from 'react';
import chair from '../../../../images/chair.png';
import './HeaderMain.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h2 className="heading">Your New Smiles<br></br> Starts here</h2><br></br>
            <p className="paragraph text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br></br>
            <button className=" getAppoint">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6">
        <img src={chair} className="imageSize "></img>

        </div>
            
        </main>
    );
};

export default HeaderMain;