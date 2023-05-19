import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center'>Welcome To My Blog</h2>
            <div className=" bg-base-100 text-left w-11/12 mx-auto mt-10 grid lg:grid-cols-2 gap-5">
                <div className="card w-full bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className='pt-2'><span className='font-semibold'>Access token:</span> It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. <br />
                        <span className='font-semibold'>Refresh token:</span> The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, the user would have to authenticate again to obtain an access token. With refresh token, this step can be skipped and with a request to the API get a new access token that allows the user to continue accessing the application resources.
                            <br />
                            <span className='font-semibold'>Access token:</span> are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. <br />
                            <span className='font-semibold'>Refresh token:</span> is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token. <br />
                            <span className='font-semibold'>Typically you have two options for client-side token storage:</span> localStorage and HTTP OnlyCookies. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser.
                        </p>
                    </div>
                </div>
                <div className="card w-full bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
                        <p className='pt-2'>
                            <span className='font-semibold'>SQL databases</span> define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. <br /> <br />
                            <span className='font-semibold'>NoSQL databases</span>  also referred to as “not only SQL”, “non-SQL”, is an approach to database design that enables the storage and querying of data outside the traditional structures found in relational databases. <br /> <br />
                            <span className='font-semibold'>The five critical differences between SQL and NoSQL are:</span> <br />
                            1. SQL databases are relational, and NoSQL databases are non-relational. <br />
                            2. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                            3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                            4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                            5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.<br />
                        </p>
                    </div>
                </div>
                <div className="card w-full bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">3. What is express js? What is Nest JS ?</h2>
                        <p className='pt-2'><span className='font-semibold'>Express:</span> is a node js web application framework that provides broad features for building web and mobile applications. <br /> It is used to build a single page, multipage, and hybrid web application. <br />
                            It's a layer built on the top of the Node js that helps manage servers and routes <br />
                            Express was created to make APIs and web applications with ease <br />
                            The reason behind creating an express framework for node js is: <br />
                            Time-efficient , 
                            Fast , 
                            Economical , 
                            Easy to learn , 
                            Asynchronous <br />
                            <br /><span className='font-semibold'>Nest JS:</span> is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. <br />
                            NestJs is created for microservices. You can build Rest APIs, MVC applications, GraphQL applications, Web Sockets with it. As Nest applications are written in TypeScript, error detection at compile time safeguards the code and avoids errors while writing multiple microservices that have the same response mode. NestJS enables developers to build amazing, organized, and lightweight microservices. <br /> 
                            Built on top of Express.JS, Nest.JS offers multiple functionalities and out-of-the-box APIs. Developers can leverage the features of Nest.JS to build applications with less code. 
                            </p>
                    </div>
                </div>
                <div className="card w-full bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">4. What is MongoDB aggregate and how does it work ?</h2>
                        <p className='pt-2'><span className='font-semibold'>Aggregation</span> is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.<br /> <br />
                        As with many other database systems, MongoDB allows you to perform a variety of aggregation operations. These allow you to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query. <br /> <br />
                        Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with group by is an equivalent of MongoDB aggregation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;