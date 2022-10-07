import { createContext } from "react";
import { useState, useEffect } from "react";

/*Creo el contexto */
const Context = createContext({});

/*Provider con la fuente de datos */
const ContextProvider = ({ children }) => {

    const [ productList, setProductList ] = useState([]);
    const [ total, setTotal ] = useState(0);
    
    /*Función para acceder a la información del json */
    const getInfoProducts = async() => {
      const res = await fetch('./pizzas.json');
      const data = await res.json();
      console.log(data)
      setProductList(data);
    }
    
    useEffect(()=>{
      getInfoProducts();
    }, []);

    return (
        /*En el ContextProvider puedo pasar todas las variables y funciones con desestructuración. Todos los children podrán acceder a esos datos. */
        <Context.Provider value={{productList, setProductList, total, setTotal}}>
            {children}
        </Context.Provider>
    );

};


export { ContextProvider };
export default Context;