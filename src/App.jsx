import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";

function App() {

  return (
    <ChakraProvider>

    <MainLayout>
      <ItemListContainer greeting="Bienvenido a la tiendita!"/>
    </MainLayout>  
        
    </ChakraProvider>
  )
};

export default App
