import React, { useContext } from 'react';
import '../Home/ToyCss/Toy.css'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../Hooks/useTitle';
const AddAToy = () => {
    const {user} = useContext(AuthContext)
    useTitle("Add a toy")
    const addToy = event => {
        event.preventDefault()
        const from = event.target
        const toyName = from.toyName.value
        const toyPhoto = from.toyPhoto.value
        const email = user?.email
        const sellerName  = user?.displayName
        const categoryName = from.categoryName.value
        const price = from.price.value
        const rating = from.rating.value
        const quantity = from.quantity.value
        const details = from.details.value
        const toy = {
            sellerName,
            email,
            toyName: toyName,
            toyPhoto: toyPhoto,
            categoryName: categoryName,
            price: price,
            rating: rating,
            quantity: quantity,
            details: details
        }
        fetch('http://localhost:5000/addToy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                from.reset()
             }
         })
    }
    return (
        <div className='container mt-5'>
            <h2 className='text-center my-3'>Add A Toy</h2>
            <div className='mt-4'>
                <form onSubmit={addToy}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="form-floating mb-3">
                                    <input type="text" placeholder="toyName" name='toyName' class="form-control"/>
                                    <label>Toy Name</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="url" class="form-control" name='toyPhoto' placeholder="toyPhoto"/>
                                <label>Toy Photo</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="email" defaultValue={user?.email} class="form-control" placeholder="email"/>
                                <label>Email</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input defaultValue={user?.displayName} type="text" class="form-control" placeholder="Seller Name"/>
                                <label>Seller Name</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="text" name='categoryName' class="form-control" placeholder="CategoryName"/>
                                <label>Category Name</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="text" name="price" class="form-control" placeholder="price"/>
                                <label>Price</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="text" name='rating' class="form-control" placeholder="rating"/>
                                <label>Rating</label>
                            </div>
                        </div>   
                        <div className='col-lg-6'>
                            <div class="form-floating mb-3">
                                <input type="text" name='quantity' class="form-control" placeholder="quantity"/>
                                <label>Quantity</label>
                            </div>
                        </div>   
                        <div className='col-lg-12'>
                            <div class="form-floating mb-3">
                                <input type="text" name='details' class="form-control" placeholder="details"/>
                                <label>Details</label>
                            </div>
                        </div>   
                        <div className='col-lg-12'>
                            <input className='random-btn text-white btn w-100 p-3' type="submit" value="Add Toy" />
                        </div>   
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;