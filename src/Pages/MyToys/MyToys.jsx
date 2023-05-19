import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyToy from './MyToy';
const MyToys = () => {
    const {user} = useContext(AuthContext)
    useTitle('My toys')
    const url = `http://localhost:5000/addToy?email=${user?.email}`
    const [myToys , setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setMyToys(data))
    }, [url])
    return (
        <div className='container'>
            <h2 className='text-center my-5'>My Toys</h2>
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
                    {
                        myToys.map(myToy => <MyToy key={myToy._id} myToy={myToy}></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;