import React from 'react';

const ToyCategory = () => {
    return (
        <div className='container text-center my-5'>
            <h2 className='mb-5'>Toys Category</h2>
            <div className='row justify-content-center'>
                <div className="col-lg-3 me-4 mt-2 shadow-lg p-3 rounded">
                    <img className='mb-3' src="img/shield.png" alt="" />
                    <h3>Marvel toys</h3>
                </div>
                <div className="col-lg-3 me-4 mt-2 shadow-lg p-3 rounded">
                    <img className='mb-3' src="img/robot.png" alt="" />
                    <h3>Transformer toys</h3>
                </div>
                <div className="col-lg-3 me-4 mt-2 shadow-lg p-3 rounded">
                   <img className='mb-3' src="img/lightsaber.png" alt="" />
                   <h3>Star wars toys</h3>
                </div>
            </div>
        </div>
    );
};

export default ToyCategory;