import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData()
    const {name, price, rating, img, details, quantity, categoryName} = toy
    useTitle(categoryName)
    return (
        <div className='container'>
            <h3 className='text-center my-3'>{categoryName}</h3>
            <div className="row justify-content-center align-items-center mt-4">
                <div className="col-lg-6">
                   <img style={{width:"500px"}} className='img-fluid rounded' src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2>{name}</h2>
                    <p className='mt-2'>{details}</p>
                    <div className='d-flex justify-content-between mt-1'>
                        <h6>Price: {price}</h6>
                        <h6>Rating: {rating}</h6>
                        <h6>Quantity: {quantity}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ToyDetails;