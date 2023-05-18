import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import {Tooltip} from 'react-tooltip';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () =>{
        logOut()
            .then(() => {})
            .catch(() => {})
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary container">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Toy Land</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-3 fw-bold" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link me-3 fw-bold">All Toys</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link me-3 fw-bold ">Blogs</Link>
                        </li>
                        {
                            user ? <>
                            <li className="nav-item">
                                <Link to="" className="nav-link me-3 fw-bold">My Toys</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link me-3 fw-bold">Add A Toy</Link>
                            </li>
                            </> : <></>
                        }
                    </ul>
                    <div>
                        {
                            user ? <button onClick={handleLogout}  className='btn bg-danger text-white me-2'>Log out</button>
                            : <Link to='/login'><button className='btn bg-danger text-white me-2'>Login</button></Link>
                        }
                        {
                            user ? 
                            <>
                            <img 
                            data-tooltip-id="tooltip" data-tooltip-content={user.displayName}
                            style={{width:"40px", height:"40px", borderRadius:"50%", cursor:"pointer"}} 
                            src={user.photoURL} alt="" /> 
                            <Tooltip id="tooltip" place="right" effect="solid"   />
                            </>
                            : <FaUserCircle style={{width:"40px", height:"40px",  cursor:"pointer"}}/>
                        }
                       
                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;