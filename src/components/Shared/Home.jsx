import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefdata')
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
                            <Card.Img style={{ height: '400px' }} className='img-fluid' variant="top" src={d.Picture} />

                            <Card.Title className='ms-2'>{d.Name}</Card.Title>
                            <div className='d-flex justify-content-around align-item-center'>
                                <p className='fs-5'>Experience Year: {d.Experience}</p>
                                <p className='fs-5'>Number of Recipes: {d.recipes.length}</p>
                            </div>
                            <h4 className='ms-2'> <FaThumbsUp /> {d.Likes}</h4>

                            <Button className='btn btn-secondary '><Link className='text-decoration-none fs-5' to={`/data/${d.id}`}>View Recipe</Link></Button>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default Home;