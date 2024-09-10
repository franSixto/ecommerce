import { getProductByCategory } from "../services/products";
import React from "react";

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getProductByCategory(id)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

    return { products };
};
