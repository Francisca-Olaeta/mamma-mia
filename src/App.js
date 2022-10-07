import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyCard"
import Home from "./Views/Home";
import Detalles from "./Views/Detalles";
import Carrito from "./Views/Carrito";
import NotFound from "./Views/NotFound";


import { ContextProvider } from "./Context";


function App() {


  return (
    <div className="App">
      <ContextProvider>

        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Detalles />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </ContextProvider>
 

   
    </div>
  );
}

export default App;
