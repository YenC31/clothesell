import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  const handlerEliminar = () => {
    eliminarItem();
  };

  if (cart.length === 0) {
    return (
      <div>
        <h2>Empty Cart. Add products to your cart</h2>
        <Link to="/">Back to products</Link>
      </div>
    );
  }
  return (
    <>
      <div>
        <h2>Tu Compra</h2>
        <hr />
        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.nombre}</h4>
            <p>Cantidad {item.cantidad}</p>
            <p>Precio:$ {item.cantidad * item.precio}</p>
            <button
              onClick={() => {
                eliminarItem(item.id);
              }}
            >
              <BsFillTrashFill />
            </button>
          </div>
        ))}
        <hr />
        <h2>Total: ${totalCart()}</h2>
        <div>
          <button onClick={vaciarCart}>Vaciar Carrito</button>
          <button>Terminar Comprar</button>
        </div>
      </div>
    </>
  );

  /* <>
      <div>
        <h2>Tu Compra</h2>
        <hr />
        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.nombre}</h4>
            <p>Cantidad {item.cantidad}</p>
            <p>Precio:$ {item.cantidad * item.precio}</p>
            <button
              onClick={() => {
                eliminarItem(item.id);
              }}
            >
              <BsFillTrashFill />
            </button>
          </div>
        ))}
        <hr />
        <h2>Total: ${totalCart()}</h2>
        <div>
          <button onClick={vaciarCart}>Vaciar Carrito</button>
          <button>Terminar Comprar</button>
        </div>
      </div>
    </>*/
};
