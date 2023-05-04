import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaHeart, FaAngleDoubleRight, FaShoppingBag, FaThumbsUp } from 'react-icons/fa';

const Data = () => {
    const data = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col key={data.id} lg={3}>
                        <Card className='p-3 mb-4 mt-4'>
                            <img className='rounded' src={data.Picture} alt="" />
                            <Card.Body>
                                <Card.Title className='fw-bold fs-3'>{data.Name}</Card.Title>
                                <div>
                                    <p className='fw-semibold text-success'><span>{data.Experience}</span> Years of experience</p>
                                    <p className='fw-semibold'><span><FaShoppingBag className='text-danger ' /> {data.recipes.length}</span> Recipes</p>
                                    <p className='fw-semibold'><span><FaThumbsUp className='text-danger' /> {data.Likes}</span> Likes
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
                                <div lg={3} className='p-2 mt-4 mb-4 d-lg-flex justify-content-around align-item-center bg-info rounded' >
                                    <div style={{ width: '200px' }}>
                                        <img className='img-fluid rounded' src={d.image} alt="" />
                                    </div>
                                    <div style={{ width: '300px' }}>
                                        <h3 className='text-light'>{d.name}</h3>
                                        <p className='text-light'><span className='text-dark fw-bold'>Cooking Method:</span> {d.cooking_method}</p>
                                    </div>
                                    <div>
                                        {
                                            data.recipes[0].ingredients.map(d => (

                                                <p key={data.id} className='text-light mb-0'><FaAngleDoubleRight /> {d}</p>

                                            ))
                                        }
                                        <div className='flex-grow-1 mt-2 align-item-center mb-4'>
                                            <Rating
                                                placeholderRating={d.rating}
                                                readonly
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={< FaStar className='text-warning' />}
                                                fullSymbol={<FaStar />}
                                            ></Rating>
                                            <span className='ms-1 text-light'>{d?.rating}</span>
                                        </div>
                                        <button className='bg-warning border-0 rounded fw-medium p-2'><FaHeart /> FAVORITE</button>
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