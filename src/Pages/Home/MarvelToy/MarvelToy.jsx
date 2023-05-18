import React from 'react';

const MarvelToy = ({marvelToy}) => {
    const {name, price, rating, img} = marvelToy
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
                      <button className='btn btn-danger'>View details</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default MarvelToy;