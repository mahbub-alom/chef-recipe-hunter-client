import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaThumbsUp, FaShoppingBag, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-mahbub-alom.vercel.app/chefdata')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <Row className='ms-0 me-0'>
            {
                categories.map(d => (
                    <Col key={d.id} md={4}  >
                        <Card className='mb-5'>
                            <Card.Img style={{ height: '400px' }} className='img-fluid p-2 rounded' variant="top" src={d.Picture} />

                            <Card.Title className='ms-3 fs-3 fw-bold'>{d.Name}</Card.Title>
                            <div>
                                <p className='fs-5 fw-semibold ms-3 text-success'>Experience Year: {d.Experience}</p>
                                <p className='fs-5 ms-3 fw-semibold '><FaShoppingBag className='text-danger' /> Number of Recipes: {d.recipes.length}</p>
                            </div>
                            <h4 className='ms-3'> <FaThumbsUp className='text-danger' /> {d.Likes}</h4>

                            <Button className='mt-3 mb-2 w-50 mx-auto'><Link className='text-decoration-none fs-5 text-light' to={`/data/${d.id}`}>View Recipe <FaArrowCircleRight /></Link></Button>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default Home;