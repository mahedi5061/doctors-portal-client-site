import React, { useState } from 'react';
import ModalForPrescription from '../ModalForPrescription/ModalForPrescription';
const Prescription = ({prescriptions}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal=()=> {
      setIsOpen(true);
    }
  
    const closeModal=()=>{
      setIsOpen(false);
    }
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Date</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Prescription</th>
             
            </tr>
        </thead>
        <tbody>
            {
                prescriptions.map((prescription, index) => 
                    
                <tr>
                    <td><h6>{index + 1}</h6></td>
                    <td><h6>{prescription.name}</h6></td>
                    <td><h6>{new Date(prescription.date).toDateString('dd/MM/yyyy')}</h6></td>
                    <td><h6>{prescription.phone}</h6></td>
                    <td><button onClick={openModal} className="btn-brand">view</button></td>
                     
                </tr>
                )
            }
            <ModalForPrescription modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForPrescription>
        </tbody>
    </table>
    );
};

export default Prescription;