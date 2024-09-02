import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";
import { ProductData } from "./data/productData";

function App() {

  return (
    <ChakraProvider>

    <MainLayout>
      <ItemListContainer greeting="Bienvenido a la tiendita!" products={ProductData} />
    </MainLayout>  
        
    </ChakraProvider>
  )
};

export default App
