import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div ref={ref} className='grid' md={2}>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='bg-success p-2 rounded test-light border-0' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            <div>
                <h2>What are the differences between uncontrolled and controlled components?</h2>
                <p className='fw-semibold'><span className='text-danger'>Uncontrolled components:</span>Uncontrolled components are components that manage their own internal state without relying on the React state. They obtain their initial value directly from the DOM and then rely on the DOM to update the value as the user interacts with the component.</p>
            </div>
            <div>
                <h2>
                How to validate React props using PropTypes?
                </h2>
                <p className='fw-semibold'>
                    PropTypes is a utility library included in React that allows you to define the type and shape of the props that a component should receive. It can help catch bugs and errors by providing runtime validation of props, and can be particularly useful in larger projects where multiple developers are working on the same codebase.
                </p>
            </div>
            <div>
                <h2>What is the difference between nodejs and express js?</h2>
                <p className='fw-semibold'><span className='text-danger'>Node js: </span>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side applications using JavaScript. It uses an event-driven, non-blocking I/O model, making it efficient and lightweight. Node.js is particularly well-suited for building scalable, high-performance web applications, real-time applications, and APIs.</p>
                <p className='fw-semibold'>
                    <span className='text-danger'>express js: </span>
                    Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, such as routing, middleware, and HTTP utility methods. Express.js is known for its simplicity, speed, and ease of use.
                </p>
            </div>
            <div>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='fw-semibold'>Custom hooks allow you to extract common logic from your components into a separate function, making your code more modular, reusable, and easier to test. By creating a custom hook, you can abstract away complex behavior and provide a simple interface for other developers to use.</p>
            </div>
        </div>
    );
};

export default Blog;