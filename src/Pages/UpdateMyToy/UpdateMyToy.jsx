import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import '../Home/ToyCss/Toy.css'
const UpdateMyToy = () => {
    const toy = useLoaderData()
    console.log(toy)
    const {_id, price , quantity, details} = toy

    const updateAToy = event => {
        event.preventDefault() 
        const from = event.target
        const quantity = from.quantity.value
        const price = from.price.value
        const details = from.details.value

        const updateToy = {
            price,
            quantity,
            details
        }
        fetch(`https://assingment-11-server-site.vercel.app/addToy/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
          .then(res => res.json())
          .then(data => {
             console.log(data)
             if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
             }
          })
    }

    return (
        <div className='container'>
            <h2 className='text-center my-5'>Update My Toy</h2>
            <form onSubmit={updateAToy}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-floating mb-3">
                            <input type="text" placeholder="price" defaultValue={price} name='price' className="form-control"/>
                            <label>Price</label>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" defaultValue={quantity} name='quantity' placeholder="quantity"/>
                            <label>Quantity</label>
                        </div>
                    </div>   
                    <div className='col-lg-12'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" defaultValue={details} name='details' placeholder="details"/>
                            <label>Details</label>
                        </div>
                    </div> 
                    <div className='col-lg-12'>
                            <input className='random-btn text-white btn w-100 p-3' type="submit" value="Update Toy" />
                    </div>     
                </div>
            </form> 
        </div>
    );
};

export default UpdateMyToy;