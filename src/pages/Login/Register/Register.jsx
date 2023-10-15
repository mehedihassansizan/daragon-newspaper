/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [accepted, setAccepted] = useState(false)
  const navigate = useNavigate()
  
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;  
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError('')
    setSuccess('')
    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      updateProfile(createdUser, {
        displayName: name, photoURL: photo
      })
      setSuccess("Resgistation Complete")
      navigate('/')
      form.reset();
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
  }

  const handleAccepted = event =>{
    setAccepted(event.target.checked)
  }

  return (
    <Container className="bg-light p-5">
      <Form onSubmit={handleRegister}>
        <h1 className="text-center mb-5">Register your account</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" required>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to='/login/terms'>Terms & Conditions</Link></>}
          />
        </Form.Group>

        <Button variant="secondary" disabled={!accepted} className="w-100" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-success fw-bold">
          <h6 className="mt-3">
            Already Have An Account ?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </h6>
        </Form.Text>

        <div className="text-center mt-2">
          <Form.Text className="text-success fw-bold">{success}</Form.Text>
          <br />
          <Form.Text className="text-danger">{error}</Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
