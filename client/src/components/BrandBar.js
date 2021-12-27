import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className="row-cols-auto d-flex ms-3">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          className="p-3"
          border={brand.id === device.selectedBrand.id ? "danger" : "ligth"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
