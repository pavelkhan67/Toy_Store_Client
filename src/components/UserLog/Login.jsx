import React, { useContext, useState } from 'react';
import img from "../../assets/img/login.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import GoogleLogin from '../Shared/GoogleLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        signIn(email, password)
        .then(result => {
            const user = result.user;
            toast.success('User LogIn Successful!')
            navigate(from, {replace: true})
            form.reset();
        })
        .catch(error => {
            if(error.message == 'Firebase: Error (auth/wrong-password).'){
                setError('Wrong Password!')
            }
            else if(error.message == 'Firebase: Error (auth/user-not-found).'){
                setError('Invalid Email!')
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 lg:mr-10">
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                    <h1 className="text-3xl font-bold text-center py-5">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary text-white" type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <p className='text-center pb-5 text-sm'>New To Toy Mania? <Link className='text-secondary  font-semibold' to="/register">Register</Link></p>
                    <GoogleLogin></GoogleLogin>
                    <p className='text-error pb-5 text-center'>{error}</p>
                </div>
            </div>

        </div>
    );
};

export default Login;