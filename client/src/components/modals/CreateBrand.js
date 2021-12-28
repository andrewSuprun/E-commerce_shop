import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";

const CreateBrand = ({ show, onHide }) => {
    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Brand
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"Enter name of type"} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variannt={"outline-danger"} onClick={onHide}>
            Close
          </Button>
          <Button variannt={"outline-success"} onClick={onHide}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateBrand
