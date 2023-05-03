import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mb-4'>
            <Container className='w-25 mx-auto mt-5 border rounded p-5'>
                <Form>
                    <h2>Register your Account!!!</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' />
                    </Form.Group>
                    <Button className='mb-2' variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className=" text-secondary">
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;