import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Categories = () => {
    return (
        <Container>

<Row>
            <h1 className='text-center text-success'>Our Categories</h1>
        <Col md={4}>
        <div className='mx-auto mt-4 mb-4'>
            <Card className='bg-success' style={{ width: '18rem' }}>
                <Card.Header>Category</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sandwiches</ListGroup.Item>
                    <ListGroup.Item>Burgers</ListGroup.Item>
                    <ListGroup.Item>Pizza</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
        </Col>
        <Col md={4}>
                <div className='mx-auto mt-4 mb-4'>
            <Card className='bg-success' style={{ width: '18rem' }}>
                <Card.Header>Category</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Seafood</ListGroup.Item>
                    <ListGroup.Item>Pasta</ListGroup.Item>
                    <ListGroup.Item>Soups</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
        </Col>
        <Col md={4}>
        <div className='mx-auto mt-4 mb-4'>
            <Card className='bg-success' style={{ width: '18rem' }}>
                <Card.Header>Category</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Vegetarian</ListGroup.Item>
                    <ListGroup.Item>Salads</ListGroup.Item>
                    <ListGroup.Item>Pizza</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
        </Col>
        </Row>
        </Container>
    );
};

export default Categories;