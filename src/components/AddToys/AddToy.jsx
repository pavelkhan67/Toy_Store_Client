import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add A Toy')
    const handleToyAdd = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellername.value;
        const toyName = form.toyname.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const subcategory = form.subcategory.value;
        const picture = form.picture.value;
        const details = form.details.value;

        const booking = {
            sellerName: sellerName,
            email:email,
            name:toyName,
            subcategory,
            price,
            quantity,
            pictureURL:picture,
            rating,
            description:details
        }

        fetch('https://toy-store-server-rho.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Toy Added Successful!')
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center pt-10 pb-5'>Add A Toy</h2>
            <div className="card-body">
                <form onSubmit={handleToyAdd}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <input type="text" name='sellername' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='toyname' placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='subcategory' placeholder="Avengers, X-Men, GhostRider" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="url" name='picture' defaultValue="https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw69e6aae9/images/145B9A86_2.jpg?sw=767&sh=767&sm=fit" placeholder="Email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                    <textarea placeholder="Details" name='details' defaultValue='Be on the lookout for other Avengers figures and gear to imagine the brave heroes defending the world from the Mad Titan Thanos! Additional products each sold separately. Subject to availability.' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control w-1/2 lg:w-1/3 mx-auto mt-6">
                        <input className='btn btn-secondary text-white' type="submit" value="Add A Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;