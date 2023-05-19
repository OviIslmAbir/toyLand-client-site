import React, { useContext } from 'react';
import  Lottie  from "lottie-react";
import computer from '../../assets/computer.json'
import { FaEnvelope, FaKey,FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './login.css'
import useTitle from '../../Hooks/useTitle';
const Login = () => {
    useTitle('Login')
    const {login, loginAndRegisterWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const handleGoogle = () => {
        loginAndRegisterWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-7">
                  <Lottie animationData={computer} loop={true} />
                </div> 
                <div className="col-lg-5">
                    <div className='shadow-lg p-5'>
                        <form onSubmit={handleLogin}>
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
                            <div className='text-center mt-3'>
                                <span className='line'>or</span>
                                </div>
                            <div className='text-center mt-3'>
                                <button onClick={handleGoogle} style={{borderRadius:"50%", width:"50px", height:"50px"}} className='btn btn-dark'><FaGoogle  style={{width:"25px", height:"25px"}}/></button>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Login;