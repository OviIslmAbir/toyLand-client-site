import React from 'react';
import useTitle from '../../Hooks/useTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import AllToy from './AllToy';

const AllToys = () => {
    useTitle("All Toys")
    const [allToys, setAllToys] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
       setLoader(false)
       fetch('http://localhost:5000/addToys')
       .then(res => res.json())
       .then(data => setAllToys(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center my-5'>All Toys</h2>

                {
                    loader ? 
                    ( 
                        <div className="text-center">
                            <div className="spinner-border" style={{width:"50px", height:"50px"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ): 
                    <table class="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Seller Name</th>
                                <th scope="col">Toy Name</th>
                                <th scope="col">Sub-category</th>
                                <th scope="col">Available Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allToys.map(allToy => <AllToy key={allToy._id} allToy={allToy}></AllToy>)}
                        </tbody>
                    </table>
                }
        </div>
    );
};

export default AllToys;