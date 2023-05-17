import React, { useContext } from 'react';
import  Lottie  from "lottie-react";
import computer from '../../assets/computer.json'
import { FaEnvelope, FaKey, FaImage, FaUser, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const {createUser, loginAndRegisterWithGoogle, updateUserProfile} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            updateUserProfile(name, photo)
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
                <div className="col-lg-5">
                    <div className='shadow-lg p-5'>
                        <form onSubmit={handleRegister}>
                            <h3 className='text-center mb-3'>Please <span className='text-danger'>Register</span></h3>
                            <div className="input-group mb-3">
                                <span className="input-group-text p-2" id="basic-addon1"><FaUser/></span>
                                <input type="text" name='name' className="form-control p-2" placeholder="Enter Your Name" aria-label="Name" aria-describedby="basic-addon1" required/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text p-2" id="basic-addon1"><FaImage/></span>
                                <input type="url" name='photo' className="form-control p-2" placeholder="Enter Your Photo URL" aria-label="photo" aria-describedby="basic-addon1" required/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text p-2" id="basic-addon1"><FaEnvelope/></span>
                                <input type="email" name='email' className="form-control p-2" placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1" required/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text p-2" id="basic-addon1"><FaKey/></span>
                                <input type="password" name='password' className="form-control p-2" placeholder="Enter Your Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                            </div>
                            <input type="submit" value="Register" className='btn btn-danger w-100' />
                            <p className='text-center mt-3 p-2'>Already have an account? <Link className='text-danger' to='/login'>Login</Link></p>
                        </form>
                        <div className='text-center mt-3'>
                            <span className='line'>or</span>
                        </div>
                            <div className='text-center mt-3'>
                            <button onClick={handleGoogle} style={{borderRadius:"50%", width:"50px", height:"50px"}} className='btn btn-dark'><FaGoogle  style={{width:"25px", height:"25px"}}/></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                  <Lottie animationData={computer} loop={true} />
                </div> 
            </div>
        </div>
    );
};

export default Register;