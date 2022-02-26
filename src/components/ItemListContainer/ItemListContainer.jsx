import { useEffect, useState } from "react";
import { pedirDatos } from "../../helper/helper";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  console.log("este es el catId", catId);
  console.log("estos son los productos", productos);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = catId
      ? query(productosRef, where("categoria", "==", catId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  /*  pedirDatos()
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
  }, [catId]);*/

  return (
    <>{loading ? <h2> Loading... </h2> : <ItemList productos={productos} />}</>
  );
};
