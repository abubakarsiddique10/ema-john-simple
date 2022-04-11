import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    //These state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // create user
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/shop');
    }
    // These handaler
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const ConfirmPasswrodBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleErrorBlur = event => {
        setError(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 5) {
            setError('password must be 6 character');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Container>
                <div style={{ width: '420px' }} className="m-auto border px-5 py-4">
                    <h1 className="text-center">Sign Up</h1>
                    <Form onSubmit={handleCreateUser}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                            <p>{error}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={ConfirmPasswrodBlur} type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button className="w-100" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className="mt-2 d-flex justify-content-center">
                        <p className="me-2">Already have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default SignUp;