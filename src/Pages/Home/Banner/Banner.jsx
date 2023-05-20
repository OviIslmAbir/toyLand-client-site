import React from 'react';
import './banner.css'
const Banner = () => {
    return (
        <div className='container-fluid my-3 h'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <img src="img/banner-1.jpg" style={{height:"580px"}} className="d-block w-100 rounded" alt="..."/>
                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div>
                                <h1>Welcome to <span className='text-danger'>Toy Land</span></h1>
                                <p>Get an exclusive toys at comparative price</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img src="img/banner-2.jpg" style={{height:"580px"}} className="d-block w-100 rounded" alt="..."/>
                       <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div>
                                <h1>Welcome to <span className='text-danger'>Toy Land</span></h1>
                                <p>Get an exclusive toys at comparative price</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                       <img src="img/banner-3.jpg" style={{height:"580px"}} className="d-block w-100 rounded" alt="..."/>
                       <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div>
                                <h1>Welcome to <span className='text-danger'>Toy Land</span></h1>
                                <p>Get an exclusive toys at comparative price</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;