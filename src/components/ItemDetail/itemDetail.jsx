import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  id,
  nombre,
  desc,
  precio,
  img,
  stock,
  categoria,
  oferta,
  numreviews,
}) => {
  const [cantidad, setCantidad] = useState(0);

  const { cart, addCart, isInCart } = useContext(CartContext);

  console.log(cart);

  const handlerAgregar = () => {
    //early return
    if (cantidad === 0) return;

    if (!isInCart(id)) {
      const addItem = {
        id,
        nombre,
        precio,
        stock,
        oferta,
        cantidad,
      };
      addCart(addItem);
    }
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <h3>{numreviews} reviews</h3>
      <p> {desc}</p> <h5>Precio: ${precio}</h5>
      {isInCart(id) ? (
        <Link to="/Cart"> Terminar Compra</Link>
      ) : (
        //<button onClick={Cart}>Terminar Compra</button>
        // console.log("terminar compra")
        <>
          <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
          <button onClick={handlerAgregar} disabled={cantidad === 0}>
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};

//investigar useMemo, useCallback
