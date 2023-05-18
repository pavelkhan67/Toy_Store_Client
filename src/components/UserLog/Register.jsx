import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import img from "../../assets/img/login.jpg"
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Shared/GoogleLogin';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const {createUser, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const from =  '/login'

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/.{6,}/.test(password)) {
            setError("Pass: Minimum six characters");
            return;
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
                setError('')
                form.reset();
                updateUserData(createdUser, name, photo)
                handleLogOut()
                navigate(from, { replace: true })
                alert("User Created Successful!")
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName : name,
            photoURL: photo
        })
        .then(() => {
            // console.log("User name, photo updated");
        })
        .catch(error => { 
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 lg:mr-10">
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                    <h1 className="text-3xl font-bold text-center py-5">Register</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary text-white" type="submit" value="Register" />
                            </div>
                        </div>
                    </form>
                    <p className='text-center pb-5 text-sm'>Already have an account? <Link className='text-secondary  font-semibold' to="/login">Login</Link></p>
                    <GoogleLogin></GoogleLogin>
                    <p className='text-error pb-5 text-center'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;