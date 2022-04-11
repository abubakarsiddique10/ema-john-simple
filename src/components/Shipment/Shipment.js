import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleShipping = event => {
        event.preventDefault();
        console.log(email, name, address, phone)
    }
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <Container>
                <div style={{ width: '420px' }} className="m-auto border px-5 py-4">
                    <h2 className="text-center">Shipment Information</h2>
                    <Form onSubmit={handleShipping}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Your Email" value={user.email} readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Phone number" />
                        </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Add Shipping
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
export default Shipment;