import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer/Footer';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { key } from 'localforage';
// import { FaThumbsUp } from "react-icons/fa";

const Data = () => {
    const data = useLoaderData();
    console.log(data.recipes[0].ingredients[0]);
    return (
        <div>
            <Container>
                <Row>
                    <Col key={data.id} lg={3}>
                        <Card className='p-3'>
                            <img className='rounded' src={data.Picture} alt="" />
                            <Card.Body>
                                <Card.Title>{data.Name}</Card.Title>
                                <div>
                                    <p><span>{data.Experience}</span> Years of experience</p>
                                    <p><span>{data.recipes.length}</span> Recipes</p>
                                    <p><span>{data.Likes}</span> Likes
                                    </p>
                                </div>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {
                        data?.recipes?.map(d => (
                            <Col lg={9}>
                                <div lg={3} className='p-2 d-lg-flex justify-content-around align-item-center' >
                                    <div style={{ width: '200px' }}>
                                        <img className='img-fluid' src={d.image} alt="" />
                                    </div>
                                    <div style={{ width: '300px' }}>
                                        <h3 className='text-light'>{d.name}</h3>
                                        <p>{d.cooking_method}</p>
                                    </div>
                                    <div>
                                        {
                                            data.recipes[0].ingredients.map(d => (

                                                <li> {d}</li>

                                            ))
                                        }
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </div >
    )
};

export default Data;