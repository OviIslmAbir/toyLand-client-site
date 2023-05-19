import React from 'react';
import { Link } from 'react-router-dom';

const TransformerToy = ({transformerToy}) => {
    const {name, price, rating, img, _id} = transformerToy
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                <img src={img} style={{height:"200px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: {price}</p>
                    <p class="card-text">Rating: {rating}</p>
                    <div className='text-end'>
                      <Link to={`/transformerToyDetails/${_id}`}><button className='btn btn-danger'>View details</button></Link>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default TransformerToy;