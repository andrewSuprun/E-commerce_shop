import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container>
      <div className="d-flex mt-3 ">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col className="" md={9}>
          <BrandBar />
          <DeviceList/>
        </Col>
      </div>
    </Container>
  );
};

export default Shop;
