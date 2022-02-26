import { Card } from "react-bootstrap";
import React from "react";

import { Link } from "react-router-dom";

export const Item = ({
  id,
  nombre,
  precio,
  img,
  descripcion,
  categoria,
  oferta,
}) => {
  const precioFinal = oferta ? precio * 0.8 : precio;

  console.log("id desde item.jsx", id);
  console.log("oferta desde item.jsx", oferta);
  return (
    <Card style={{ width: "10rem", margin: "12px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: --${precioFinal}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        {oferta && (
          <>
            <Card.Text>20% off</Card.Text>
            <Card.Text>Free Shipping</Card.Text>
          </>
        )}
        <Link to={`/detail/${id}`}>Detalles</Link>
      </Card.Body>
      <br />
    </Card>
  );
};
