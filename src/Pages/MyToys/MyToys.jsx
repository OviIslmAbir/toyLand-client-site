import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyToy from './MyToy';
import Swal from 'sweetalert2'
const MyToys = () => {
    const {user} = useContext(AuthContext)
    useTitle('My toys')
    const url = `https://assingment-11-server-site.vercel.app/addToy?email=${user?.email}`
    const [myToys , setMyToys] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setLoader(false)
        fetch(url)
          .then(res => res.json())
          .then(data => setMyToys(data))
    }, [url])
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
               fetch(`https://assingment-11-server-site.vercel.app/addToy/${id}`,{
                  method:"DELETE"
               })
                 .then(res => res.json())
                 .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your toy has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(myToy => myToy._id !== id)
                        setMyToys(remaining)
                    }
                 })
            }
        })
    }
    return (
        <div className='container'>
            <h2 className='text-center my-5'>My Toys</h2>
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
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                           {myToys.map(myToy => <MyToy key={myToy._id} handleDelete={handleDelete} myToy={myToy}></MyToy>)}
                        </tbody>
                    </table>
                }
        </div>
    );
};

export default MyToys;