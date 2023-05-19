import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TransformerToy from '../TransformerToy/TransformerToy';
import StarWarsToy from '../StarToy/StarWarsToy';
import MarvelToy from '../MarvelToy/MarvelToy';

const ShopByCategory = () => {
    // Marvel toys data
    const [marvelToys, setMarvelToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/marvelToys')
           .then(res => res.json())
           .then(data => setMarvelToys(data))
    }, [])

    //Transformer toys data
    const [transformerToys, setTransformerToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/transformerToys')
           .then(res => res.json())
           .then(data => setTransformerToys(data))
    }, [])
    //star wars toys data
    const [starToys, setStarToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/starToys')
           .then(res => res.json())
           .then(data => setStarToys(data))
    }, [])
    
    return (
        <div className='container mt-5'>
                <Tabs>
                    <TabList className='text-center'>
                       <Tab>Star wars toys</Tab>
                       <Tab>Marvel toys</Tab>
                       <Tab>Transformer toys</Tab>
                    </TabList>
                    <TabPanel>
                        <h3 className='text-center'>Star Wars Toys</h3>
                        <div class="row row-cols-1 row-cols-lg-3 g-4 mt-4">
                          {
                            starToys.map(starWarsToy => <StarWarsToy key={starWarsToy.id} starWarsToy={starWarsToy}></StarWarsToy>)
                          }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h3 className='text-center'>Marvel Toys</h3>
                        <div class="row row-cols-1 row-cols-lg-4 g-4 mt-4">
                            {
                                marvelToys.map(marvelToy => 
                                <MarvelToy key={marvelToy.id} marvelToy={marvelToy}
                                ></MarvelToy>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h3 className='text-center'>Transformer Toys</h3>
                        <div class="row row-cols-1 row-cols-lg-3 g-4 mt-4">
                          {
                            transformerToys.map(transformerToy => 
                            <TransformerToy key={transformerToy.id} transformerToy={transformerToy}
                            ></TransformerToy>)
                          }
                        </div>
                    </TabPanel>
                </Tabs>
        </div>
    );
};

export default ShopByCategory;