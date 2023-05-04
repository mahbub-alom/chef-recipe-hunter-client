import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaHeart, FaAngleDoubleRight, FaShoppingBag, FaThumbsUp } from 'react-icons/fa';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Data = () => {
    const data = useLoaderData();
    console.log(data);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick=()=> {
        setIsFavorite(true);
        toast("This recipe is now in your favorites!");
      }
      const showToast=(message)=> {
        // Code to show a toast message
        // ...
    
        // After the toast is finished, disable the favorite button
        setFavoriteButtonDisabled(true);
      }
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
                                <Card.Text className='fw-semibold text-success'>
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
                                        <div>
                                        {
                                            d.recipes?.ingredients?.map(di => <p> {di}</p>)
  
                                            
                                        }
                                        </div>
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
                                        <button
                                        className='border-0 bg-warning p-2 rounded text-success'
                                                onClick={handleFavoriteClick}
                                                disabled={isFavorite}
                                                >
                                                {isFavorite ? <span>Favorite</span> : <span>Add to favorites</span>}
                                                </button>
                                        
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                    <ToastContainer />
                </Row>
            </Container>
            <toast />
        </div >
    )
};

export default Data;