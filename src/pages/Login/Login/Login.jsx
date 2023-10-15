/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const {user , login} = useContext(AuthContext)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError('')
    setSuccess('')
    login(email, password)
    .then(result => {
      const loginUser = result.user;
      setSuccess("Resgistation Complete")
      navigate(from, { replace: true })
      form.reset()
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
  }

  return (
    <Container  className="bg-light p-5">
      <Form onSubmit={ handleLogin}>
        <h1 className="text-center mb-5">Login your account</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" className="w-100" type="submit">
            Login
        </Button>
        <br />
        <Form.Text className="text-success fw-bold ">
            <h6 className="mt-3">Dont’t Have An Account ? <span><Link to='/login/register'>Register</Link></span></h6> 
        </Form.Text>

        <div className="text-center mt-2">
        <Form.Text className="text-success fw-bold">
          {success}
        </Form.Text>
        <br />
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
        </div>

      </Form>
    </Container>
  );
};

export default Login;
