import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)',
        transition: '0.3s',
        borderRadius: '15px'
        
    }
    
};
Modal.setAppElement('#root')

const ModalForPrescription = ({modalIsOpen, closeModal}) => {
    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
     

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
 
 
           <form className="p-5 " onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input  name="name" type="text"   placeholder="Your Name"  ref={register} className="form-control"/>
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group">
                    <input type="text"   name="phone" placeholder="Phone Number" className="form-control"  ref={register} />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group">
                    <input type="text"  name="email" placeholder="Email" className="form-control"  ref={register}/>
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group row">
                    <div className="col-4">

                        <select className="form-control" name="gender" ref={register}>
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="col-4">
                        <input   className="form-control" name="age" placeholder="Your Age" type="number" ref={register}/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="col-4">
                        <input className="form-control"   name="weight" placeholder="Weight" type="number" ref={register}/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                 
                <div className="form-group text-right">
                    
                    <input className="btn-brand btn-submit" type="submit" />
                </div>
            </form>   

        </Modal>
    </div>
    );
};

export default ModalForPrescription;