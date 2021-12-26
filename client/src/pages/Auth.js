import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5" style={{ width: 600 }}>
        <h2 className="m-auto">
          {isLogin
            ? "Sign in to E-commerce shop"
            : "Registration to E-commerce shop"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email"
            type="email"
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password"
            type="password"
          />
          <div className="d-flex justify-content-between mt-3 pl-2 pr-2">
            {isLogin ? (
              <div>
                new to E-commerce?{" "}
                <Link to={REGISTRATION_ROUTE}>Create account</Link>
              </div>
            ) : (
              <div>
                have an account E-commerce?{" "}
                <Link to={LOGIN_ROUTE}>Sign in</Link>
              </div>
            )}
            <Button variant="outline-success">{isLogin ? "Sign in" : "Registration"}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
