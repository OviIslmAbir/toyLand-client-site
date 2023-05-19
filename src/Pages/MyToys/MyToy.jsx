import React from 'react';
import '../Home/ToyCss/Toy.css'
const MyToy = ({myToy, handleDelete}) => {
    const {sellerName, toyName, categoryName, quantity, price, _id} = myToy
    return (
            <tr className='text-center'>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{categoryName}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><button onClick={() => handleDelete(_id)} className='btn random-btn text-white'>Delete</button></td>
                <td><button className='btn random-btn text-white'>Update</button></td>
            </tr>
        
    );
};

export default MyToy;