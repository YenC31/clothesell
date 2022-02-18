import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({
  id,
  nombre,
  desc,
  precio,
  img,
  stock,
  categoria,
  numReviews,
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
        cantidad,
      };
      addCart(addItem);
    }
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <h3>{numReviews} reviews</h3>
      <p> {desc}</p> <h5>Precio: ${precio}</h5>
      {isInCart(id) ? (
        //   <Link to="/Cart"> Terminar Compra</Link>
        <button>Terminar Compra</button>
      ) : (
        // console.log("terminar compra")
        <>
          <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
          <button onClick={handlerAgregar}>Add to Cart</button>
        </>
      )}
    </div>
  );
};
