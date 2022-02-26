import styled from "styled-components";
import { configBtns } from "./configBtns";

const Red = styled.div`
  background-color: red;
`;
const Blue = styled.div`
  background-color: blue;
`;

export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handlerSumar = (e) => {
    //sirve para controlar que el evento no se propaga a elementos padres
    //e.stopPropagation();
    // console.log(e);
    counter < max && setCounter(counter + 1);
    // c < max && setCounter((c) => c + 1);
  };
  const handlerRestar = () => {
    counter > min && setCounter((c) => c - 1);
  };

  const { configRestar, configSumar } = configBtns(
    counter,
    max,
    min,
    handlerRestar,
    handlerSumar
  );

  //se deben pasar referencias o funciones anonimas
  return (
    <div>
      <button {...configRestar}>-</button>
      <span>{counter}</span>
      <button {...configSumar}> +</button>
    </div>
  );
};

/*<div>
<button
  className={`btn ${counter === min ? <Red> </Red> : <Blue></Blue>}`}
  onClick={handlerRestar}
>
  -
</button>
<span>{counter}</span>
<button onClick={handlerSumar}> +</button>
</div>
*/
