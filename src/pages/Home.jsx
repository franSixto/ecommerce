import { useProducts } from "../hooks";
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
// import { useProductsById } from "./hooks/useProductsById";

export const Home = () => {
  const { productsData, loading } = useProducts();
//   const { productData } = useProductsById(1);

  return loading ? (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  ) : (
    <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"} padding={4}>
      <ItemListContainer products={productsData} />
    </Flex>
  );
};
