import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main";
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
}

export default App
