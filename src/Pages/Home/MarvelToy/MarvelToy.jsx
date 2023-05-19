import React from 'react';
import { Link } from 'react-router-dom';
import '../ToyCss/Toy.css'
const MarvelToy = ({marvelToy}) => {
    const {_id ,name, price, rating, img} = marvelToy
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                <img src={img} style={{height:"160px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: {price}</p>
                    <p class="card-text">Rating: {rating}</p>
                    <div className='text-end'>
                      <Link to={`/marvelToyDetails/${_id}`}><button className='btn random-btn text-white'>View details</button></Link>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default MarvelToy;