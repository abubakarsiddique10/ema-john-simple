import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handaleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handalePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Container>
                <div style={{ width: '420px' }} className="m-auto border px-5 py-4">
                    <h1 className="text-center">Login</h1>
                    <Form onSubmit={handleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handaleEmailBlur} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handalePasswordBlur} type="password" placeholder="Password" />
                            {
                                error?.message && error.message
                            }
                        </Form.Group>
                        <Button className="w-100" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className="mt-2 d-flex justify-content-center">
                        <p className="me-2">New to Ema-john?</p>
                        <Link to="/signup">Create an account</Link>
                    </div>
                    {
                        loading && <p className="text-center">Loading...</p>
                    }
                </div>
            </Container>
        </div>
    )
}
export default Login;