import { BrowserRouter } from 'react-router-dom';
import { FavPlantContext } from "./context/FavPlantContext";
import { useState } from 'react';
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main";
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  const [favPlant, setFavPlant] = useState({});
  const updateFavPlant = (newFavPlant) => {
    setFavPlant(newFavPlant);
  };
  const favPlantData = { favPlant, updateFavPlant };

  return (
    <>
    <FavPlantContext.Provider value={favPlantData}>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </ChakraProvider>
    </FavPlantContext.Provider>
    </>
  )
}

export default App
