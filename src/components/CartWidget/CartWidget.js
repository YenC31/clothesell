import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const cartwidged = styled.div`
  font-size: 30px;
  color: white;
`;

export const CartWidget = () => {
  const { cantidadCart, totalCart } = useContext(CartContext);

  return (
    <cartwidged>
      <Link to="/cart">
        <BsFillCartFill />
        <span>{cantidadCart()}</span>
      </Link>
    </cartwidged>
  );
};
//<span>{totalCart()}</span>
