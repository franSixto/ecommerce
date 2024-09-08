import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductData } from "./data/productData";
import { getAllProducts } from "./services/products";
import './App.css'

function App() {

  useEffect(() => {
    getAllProducts().then((res)=>{
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, 
[]);

  return (
    <ChakraProvider>

    <MainLayout>
      <ItemListContainer products={ProductData} />
    </MainLayout>  
        
    </ChakraProvider>
  )
};

export default App;
