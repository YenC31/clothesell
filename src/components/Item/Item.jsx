import { Card } from "react-bootstrap";
import React from "react";

import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, img, descripcion, categoria }) => {
  console.log("id desde item.jsx", id);
  return (
    <Card style={{ width: "10rem", margin: "12px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: --${precio}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        <Link to={`/detail/${id}`}>Detalles</Link>
      </Card.Body>
      <br />
    </Card>
  );
};
