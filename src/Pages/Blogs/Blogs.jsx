import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className='container mt-5'>
                <h1 className="text-center">Frequently Asked Any Question</h1>
                <p className="text-center">Write the correct answer to the question</p>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               Access tokens are typically stored in memory, browser cookies, or local storage, while refresh tokens should be stored in a secure and protected manner, such as HTTP-only cookies or secure storage provided by the operating system or browser.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Compare SQL and NoSQL databases?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. What is express js? What is Nest JS?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <span className="fw-bold me-1">Express JS :</span>
                            Express.js is a minimalist web application framework for Node.js, providing a simple and flexible set of features for building web applications and APIs.
                            <br />
                            <span className="fw-bold me-1">NestJS :</span>
                            NestJS is a progressive, opinionated framework for building efficient and scalable server-side applications with TypeScript, leveraging the power of Express.js under the hood. It promotes a structured and modular architecture, including features like dependency injection and built-in validation.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. What is MongoDB aggregate and how does it work?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            MongoDB's aggregate is a framework for performing advanced data processing and analysis in MongoDB. It works by using a pipeline of stages, each manipulating the input and passing it to the next stage. Stages can filter, group, sort, project, and perform various computations on the data. Aggregation allows for powerful data transformations, analytics, and reporting capabilities in MongoDB.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;