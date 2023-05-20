import React from 'react';

const Customer = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center'>What our customers say</h2>
            <div className="row my-5">
                <div className="col-lg-4">
                    <div className='text-center'>
                        <img style={{width:"100px", height:"100px", borderRadius:"50%"}} className='mb-2' src="img/customer/customer-1.jpg" alt="" />
                        <h4>Tony Stark</h4>
                        <p>Great company with wonderful gifts and great prices. Fast, affordable shipping. Will definitely purchase from them again, and highly recommend.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='text-center'>
                        <img style={{width:"100px", height:"100px", borderRadius:"50%"}} className='mb-2' src="img/customer/customer-2.avif" alt="" />
                        <h4>Emma Stone</h4>
                        <p>Best place in town to get unique and super hero toys for children of all ages. The sales people are very familiar with products in the store and are extremely helpful.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='text-center'>
                        <img style={{width:"100px", height:"100px", borderRadius:"50%"}} className='mb-2' src="img/customer/customer-3.avif" alt="" />
                        <h4>Peter Parker</h4>
                        <p>Love this company. Always quality learning toys that are fun and well made. I love all the active choices and toys that really make kids .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;