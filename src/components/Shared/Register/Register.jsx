import React, { useState } from "react";
import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";

function Register() {
    const { createUser } = useContext(AuthContext);
    
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')

    const handleCreateAccount = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photo
                })
                setError('')
                form.reset()

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
        
    }




    return (
        <Container className="mb-4 mt-4">
            <Row className="justify-content-center">
                <Col className="border rounded p-4" xs={12} sm={8} md={6}>
                    <Form onSubmit={handleCreateAccount}>
                        <h2 className="text-center text-success">Register your Account!!!</h2>
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
                            <Form.Check type="checkbox" name='accept' label="Accept terms & conditions" />
                        </Form.Group>
                        <Button className='mb-2' variant="primary" type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className=" text-secondary">
                            Already have an account? <Link to='/login'>Login</Link>
                        </Form.Text>
                    <p className="text-danger">{error}</p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
