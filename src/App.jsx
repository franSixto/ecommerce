import MainLayout from "./layout/MainLayout";
import { ItemListContainer } from "./components";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spinner } from "@chakra-ui/react";
import "./App.css";
import { useProducts } from "./hooks";
import { useProductsById } from "./hooks/useProductsById";

function App() {
  const { productsData, loading } = useProducts();
  const {productData} = useProductsById(1);

  return (
    <ChakraProvider>
      <MainLayout>
        {loading ? (
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
        )}
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
