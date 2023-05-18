import React from 'react';
const Gallery = () => {
    return (
        <div className='container my-3'>
            <h2 className='text-center'>Toys Gallery</h2>
            <div className="row">
                <div className="col-lg-4">
                    <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-1.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                    <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-2.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                   <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-5.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                    <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-6.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                   <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-3.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                    <img style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' src="img/Toys/toy-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;