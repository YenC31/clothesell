import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  const handlerEliminar = () => {
    eliminarItem();
  };

  return (
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
  );
};
