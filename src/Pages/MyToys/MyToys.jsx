import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/addToy?email=${user?.email}`
    const [myToys , setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setMyToys(data))
    }, [url])
    return (
        <div>
            {myToys.length}
        </div>
    );
};

export default MyToys;