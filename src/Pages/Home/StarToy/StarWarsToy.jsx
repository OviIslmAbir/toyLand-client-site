import React from 'react';
import { Link } from 'react-router-dom';
import '../ToyCss/Toy.css'
const StarWarsToy = ({starWarsToy}) => {
    const {name, price, rating, img, _id} = starWarsToy
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                <img src={img} style={{height:"200px"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Rating: {rating}</p>
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