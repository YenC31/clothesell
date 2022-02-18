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

  //se deben pasar referencias o funciones anonimas
  return (
    <div>
      <button onClick={handlerRestar}> -</button>
      <span>{counter}</span>
      <button onClick={handlerSumar}> +</button>
    </div>
  );
};
