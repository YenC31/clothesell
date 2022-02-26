import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const cartwidged = styled.div`
  font-size: 30px;
  color: white;
  visibility: visible;
  opacity: 1;
  transition: all 0.5s ease-out;
`;

const cartHidden = styled.div`
  opacity: 0;
  visibility: hidden;
`;

export const CartWidget = () => {
  const { cantidadCart, cart } = useContext(CartContext); //totalCart

  return (
    <>
      {cart.length === 0 ? (
        <cartHidden></cartHidden>
      ) : (
        <cartwidged>
          <Link to="/cart">
            <BsFillCartFill />
            <span>{cantidadCart()}</span>
          </Link>
        </cartwidged>
      )}
    </>
  );
};
//<span>{totalCart()}</span>
