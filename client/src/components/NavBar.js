import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={SHOP_ROUTE} className={styles.link}>
          E-commerce
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
              className={styles.button}
            >
              Sign out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Sign in
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
