import MainLayout from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { MainRouter } from "./router";

function App() {
  

  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter/>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
