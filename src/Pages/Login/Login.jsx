import React from 'react';
import  Lottie  from "lottie-react";
import computer from '../../assets/computer.json'
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-7">
                  <Lottie animationData={computer} loop={true} />
                </div> 
                <div className="col-lg-5">
                    <form className='shadow-lg p-5'>
                        <h3 className='text-center mb-3'>Please <span className='text-danger'>Login</span></h3>
                        <div className="input-group mb-3">
                            <span className="input-group-text p-3" id="basic-addon1"><FaEnvelope/></span>
                            <input type="email" name='email' className="form-control p-3" placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text p-3" id="basic-addon1"><FaKey/></span>
                            <input type="password" name='password' className="form-control p-3" placeholder="Enter Your Password" aria-label="Password" aria-describedby="basic-addon1"/>
                        </div>
                        <input type="submit" value="Login" className='btn btn-danger w-100' required />
                        <p className='text-center mt-3 p-2'>Have an account? <Link className='text-danger' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;