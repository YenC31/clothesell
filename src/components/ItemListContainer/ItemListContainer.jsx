import { useEffect, useState } from "react";
import { pedirDatos } from "../../helper/helper";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  console.log("este es el catId", catId);
  console.log("estos son los productos", productos);

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((res) => {
        if (catId) {
          setProductos(res.filter((el) => el.categoria === catId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <>{loading ? <h2> Loading... </h2> : <ItemList productos={productos} />}</>
  );
};
