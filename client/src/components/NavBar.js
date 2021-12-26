import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { SHOP_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={SHOP_ROUTE} className={styles.link}>
          E-commerce
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light">Admin</Button>
            <Button variant="outline-light" className={styles.button}>
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
