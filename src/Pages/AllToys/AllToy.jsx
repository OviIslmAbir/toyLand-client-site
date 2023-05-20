import React from 'react';
import { Link } from 'react-router-dom';
const AllToy = ({allToy}) => {
    const {sellerName, toyName, categoryName, quantity, price, _id} = allToy
    return (
      <>    
        <tr className='text-center'>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{categoryName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><Link to={`/allToys/${_id}`}><button className='btn random-btn text-white'>View details</button></Link></td>
        </tr>
      </>
        
    );
};

export default AllToy;