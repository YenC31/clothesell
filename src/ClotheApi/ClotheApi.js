import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

//const KEY = "1234";
//const q = "coderhoue";

//const urlClothe= "https://api.mercadolibre.com/sites/MLA/search?q=Ropa%20G6";
//curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?q=Ropa%20G6

export const ClotheApi = () => {
  const [clothe, setClothe] = useState(null);

  console.log(clothe);

  const [idPosition, setIdPosition] = useState(1);

  const hadleAdd = () => {
    setIdPosition(idPosition + 1);
  };

  const hadleDrop = () => {
    idPosition > 1 && setIdPosition(idPosition - 1);
  };

  console.log(idPosition);

  useEffect(() => {
    setClothe(null);

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Vestidos`)
      .then((resp) => resp.json())
      .then((data) => {
        setClothe(data);
      });
  }, [idPosition]);

  return (
    <div className="container my-5">
      <h2>Clothe Api</h2>
      <hr />
      {clothe ? (
        <div>
          <h3>{clothe.results[idPosition].id}</h3>
          <h3>{clothe.results[idPosition].title}</h3>
          <h3>{clothe.results[idPosition].price}</h3>
          <img
            src={clothe.results[idPosition].thumbnail}
            alt={clothe.results[idPosition].title}
          />
          <hr />
          <button
            onClick={hadleDrop}
            className="btn-btn-outline-primary mx-3"
            disabled={idPosition == 1}
          >
            -
          </button>
          <button onClick={hadleAdd} className="btn-btn-outline-primary">
            +
          </button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
