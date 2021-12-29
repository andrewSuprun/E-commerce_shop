import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from "../assets/big_star.png";
const DevicePage = () => {
  const device = { id: 1, name: "iphone 12", price: 20000, rating: 5, img: "" };
  const description = [
    {id: 1, title: 'RAM', description: '5 Gb'},
    {id: 2, title: 'Camera', description: '12 Mp'},
    {id: 3, title: 'Processor', description: 'i7'},
    {id: 4, title: 'Колличество ядер', description: '8'},
    {id: 5, title: 'Acccum', description: '6000mA'},
  ];
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center text-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
              <Card className='d-flex align-items-center justify-content-center'
              style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
              >
                <h3>{device.price} UAH</h3>
                <Button variant={'outline-dark'}>Add to cart</Button>
              </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column ms-3'>
        <h2>Property</h2>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index %  2 === 0 ? 'lightgray' : 'transperent'}}>
            {info.title}: {info.description}
          </Row>
          )}
      </Row>
    </Container>
  );
}

export default DevicePage;
