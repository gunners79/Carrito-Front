import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.scss";


const ContactForm = () => {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 mx-auto">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Número de teléfono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su número de teléfono" />
          </Form.Group>
          <Form.Group controlId="formBasicCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su ciudad" />
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label>País</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su país" />
          </Form.Group>
          <Form.Group controlId="formBasicComments">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingrese sus comentarios" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default ContactForm;
