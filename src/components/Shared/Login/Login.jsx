import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Login() {
    const { logIn, googleLogin,githubLogin } = useContext(AuthContext)
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')

    const navigate=useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname||'/';

    const handleLogin = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from)
                // setSuccess('Login Successfully completed')
                // form.reset()
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
            
    }

    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const githubSignIn=()=>{
        githubLogin()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    

    return (
        <Container className="mb-4 mt-4">
            <Row className="justify-content-center">
                <Col className="border rounded p-4" xs={12} sm={8} md={6}>
                    <Form onSubmit={handleLogin}>
                        <h2 className="text-center text-success">Please Login!!!</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="w-75" type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="w-75" type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className='mb-2' variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <p className="text-danger">{error}</p>
                        <p className="text-success">{success}</p>
                        <Form.Text className=" text-secondary">
                            Don't have an Account? <Link to='/register'>Register</Link>
                        </Form.Text>

                        <Form.Text className="text-success">

                        </Form.Text>
                    </Form>
                    <Form.Text className="d-flex gap-3 mt-3">
                            <button onClick={googleSignIn} className="border-0 rounded bg-success fs-6 p-2 text-light"><FaGoogle/> Login with Google</button>
                            <button onClick={githubSignIn} className="border-0 rounded bg-success fs-6 p-2 text-light"><FaGithub/> Login with Github</button>
                        </Form.Text>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
