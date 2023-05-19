import React from 'react';
import '../Home/ToyCss/Toy.css'
import { Link } from 'react-router-dom';
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
                <td>
                    <Link to={`/updateMyToy/${_id}`}>
                        <button className='btn random-btn text-white'>Update</button>
                    </Link>
                </td>
            </tr>
        
    );
};

export default MyToy;