import { Item } from "../Item/Item";
import "./ItemList.css";
import styled from "styled-components";
import { useEffect } from "react";

const itemlistcontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const row = `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const rowcenter = `
  justify-content: center;
`;

/* Card */
const card = `
  border: 0.1rem #c0c0c0 solid;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  margin: 1rem;
`;
const cardbody = `
  padding: 1rem;
`;
const price = `
  font-size: 2rem;
`;

export const ItemList = ({ productos }) => {
  useEffect(() => {
    console.log("ItemList Montado");

    return () => {
      console.log("ItemList desmontado");
    };
  }, []);
  return (
    <section>
      <itemlistcontainer>
        <card>
          {productos.map((el) => (
            <Item
              key={el.id}
              nombre={el.nombre}
              precio={el.precio}
              img={el.img}
              descripcion={el.descripcion}
              oferta={el.oferta}
              id={el.id}
              count={el.stock}
              brand={el.brand}
              rating={el.rating}
              numReviews={el.numReviews}
            />
          ))}
        </card>
      </itemlistcontainer>
    </section>
  );
};
