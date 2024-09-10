import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export const useProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          //Actualizamos ese estado con la informacion de la API

          setProductsData(res.data.products);
        } else {
          console.log("Error");
        }
      })

      .catch((err) => {
        console.log(err);
      })

      .finally(() => {
        // Quiero que cuando finalice mi promesa - la aplicación deje de mostrar el spinner

        setLoading(false);
      });
  }, []);

  return { productsData, loading };
};
