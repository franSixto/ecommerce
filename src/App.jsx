import { ItemListContainer } from "./components";
import MainLayout from "./layout/MainLayout";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { getAllProducts } from "./services/products";
import "./App.css";
import { Flex, Spinner } from "@chakra-ui/react";

function App() {
  //Generamos el estado donde vamos a almacenar los productos

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
          <Flex
            gap={4}
            flexWrap={"wrap"}
            justifyContent={"center"}
            padding={4}
          >
            <ItemListContainer products={productsData} />
          </Flex>
        )}
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
