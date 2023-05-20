import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-5 footer p-5'>
            <footer className='container'>
                <div className='row'>
                    <div className="col-lg-3 col-12 mt-3 text-center text-lg-start">
                        <Link className="navbar-brand" to='/'><h2>Toy Land</h2></Link>
                        <p>Welcome to Toy Land</p>
                        <p>&copy; copyright Toy Land, 2023</p>
                    </div>
                    <div className="col-lg-3 col-12 mt-3 text-center text-lg-start">
                        <h2>Categories</h2>
                        <li className='mt-3'>Marvel toys</li>
                        <li className='mt-3'>Transformer toys</li>
                        <li className='mt-3'>Star wars toys</li>
                    </div>
                    <div className="col-lg-3 col-12 mt-3 text-center text-lg-start">
                        <h2>Brands</h2>
                        <li className='mt-3'>Lego</li>
                        <li className='mt-3'>Green toys</li>
                        <li className='mt-3'>V tech</li>
                        <li className='mt-3'>Hot wheels</li>
                    </div>
                    <div className="col-lg-3 col-12 mt-3 text-center text-lg-start">
                        <h2>About Us</h2>
                        <li className='mt-3'><a className='a' href="">Help center</a></li>
                        <li className='mt-3'><a className='a' href="">Store location</a></li>
                        <li className='mt-3'><a className='a' href="">Privacy & Policy</a></li>
                        <li className='mt-3'><a className='a' href="">Trams of Service</a></li>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <h2 className='text-center'>Contact Us</h2>
                        <div className="social-menu mt-5">
                            <ul>
                                <li><a href=""><FaFacebook className=' my-2' style={{width:"30px", height:"30px"}}/></a></li>
                                <li><a href=""><FaTwitter className='  my-2' style={{width:"30px", height:"30px"}}/></a></li>
                                <li><a href=""><FaInstagram className='  my-2' style={{width:"30px", height:"30px"}}/></a></li>
                                <li><a href=""><FaYoutube className='  my-2' style={{width:"30px", height:"30px"}}/></a></li>
                                <li><a href=""><FaLinkedin className='  my-2' style={{width:"30px", height:"30px"}}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;