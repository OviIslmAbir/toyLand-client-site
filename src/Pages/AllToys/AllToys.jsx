import React from 'react';
import useTitle from '../../Hooks/useTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import AllToy from './AllToy';
import { FaSearch } from 'react-icons/fa';
const AllToys = () => {
    useTitle("All Toys")
    const [allToys, setAllToys] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
       setLoader(false)
       fetch('https://assingment-11-server-site.vercel.app/addToys')
       .then(res => res.json())
       .then(data => setAllToys(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState('');
    const apiUrl = 'https://assingment-11-server-site.vercel.app/searchToy'; 
  
    const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm)
    try {
        const response = await fetch(`${apiUrl}?toyName=${searchTerm}`);
        const data = await response.json();
        setAllToys(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }


    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-3'>All Toys</h2>
            <div className="input-group mb-3 w-50 mx-auto mb-4">
                <span className="input-group-text p-3" id="basic-addon1"><FaSearch/></span>
                <input type="text" className="form-control p-3" onChange={handleSearch} value={searchTerm} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

                {
                    loader ? 
                    ( 
                        <div className="text-center">
                            <div className="spinner-border" style={{width:"50px", height:"50px"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ): 
                    <table className="table">
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