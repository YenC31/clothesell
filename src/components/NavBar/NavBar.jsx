import React from "react";
import styled from "styled-components";
//import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

const Container = styled.div`
  height: 80px;
`;

const Roll = styled.div`
  padding: 10px 10px;
  display: flex;
  alig-items: center;
  justify-content: space-between;
  background-color: gray;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-color: blue;
`;

const ContainerBusqueda = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  aling-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Entrada = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  text-aling: center;
  justify-content: flex-end;
  text-decoration: none;
`;

const Logo = styled.div`
  font-weight: bold;
  padding: 20px;
  text-aling: center;
`;

const limked = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const NavBar = () => {
  return (
    <Container>
      <Roll>
        <Left>
          <Lang>EN</Lang>
          <ContainerBusqueda>
            <Entrada />
            <Search style={{ color: "gray", fontSize: 12 }} />
          </ContainerBusqueda>
        </Left>
        <Right>
          <Link to="/productos" style={{ color: "white", fontSize: 20 }}>
            HOME&nbsp;
          </Link>
          <Link to="/productos/bags" style={{ color: "white", fontSize: 20 }}>
            BAGS&nbsp;
          </Link>
          <Link to="/productos/shirts" style={{ color: "white", fontSize: 20 }}>
            SHIRTS&nbsp;
          </Link>
          <Link to="/productos/pants" style={{ color: "white", fontSize: 20 }}>
            PANTS&nbsp;
          </Link>
          <Link to="/productos/shoes" style={{ color: "white", fontSize: 20 }}>
            SHOES&nbsp;
          </Link>
          <CartWidget />
        </Right>
      </Roll>
    </Container>
  );
};

//<div>
//<Badge badgeContent={2} color="primary">
// <ShoppingCartOutlined />
//</Badge>
//</div>
