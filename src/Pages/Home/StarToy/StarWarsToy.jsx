import React from 'react';
import { Link } from 'react-router-dom';
import '../ToyCss/Toy.css'
const StarWarsToy = ({starWarsToy}) => {
    const {name, price, rating, img, _id} = starWarsToy
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
                      <Link to={`/starToyDetails/${_id}`}><button className=' text-white random-btn btn'>View details</button></Link>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default StarWarsToy;