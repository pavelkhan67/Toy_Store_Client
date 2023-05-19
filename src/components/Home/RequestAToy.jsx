import React from 'react';
import { toast } from 'react-toastify';

const RequestAToy = () => {

    const handleConfirm = () => {
        alert('Your Request Confirmed, We will bring your product Soon!!')
    }

    return (
        <div>
            <h2 className='text-5xl font-bold text-center pt-10 pb-5'>Request A Toy</h2>
            <p className='text-center w-9/12 mx-auto'>We also provide a preBook or preOrder system , Here a customer can order a toy which is not available in our store. But if the customer give information that which toy they wants we can provide them their desire.</p>
            <p className='text-center py-4 text-xl font-bold'>There is no Bound In Joy!!</p>
            <div className="card-body">
                <form onSubmit={handleConfirm}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <input type="text" name='toyname' placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name='Date' placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea placeholder="Message" name='message' defaultValue='' className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        </div>
                    </div>

                    <div className="form-control w-1/2 lg:w-1/3 mx-auto mt-6">
                        <input className='btn btn-secondary text-white' type="submit" value="Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestAToy;