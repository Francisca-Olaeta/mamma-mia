import { createContext } from "react";
import { useState, useEffect } from "react";

/*Creo el contexto */
const Context = createContext({});

/*Provider con la fuente de datos */
const ContextProvider = ({ children }) => {

    const [ productList, setProductList ] = useState([]);
    const [ cart, setCart ] = useState([]);
    
    /*Función para acceder a la información del json */
    const getInfoProducts = async() => {
      const res = await fetch('./pizzas.json');
      const data = await res.json();
      setProductList(data);
    }
    
    useEffect(()=>{
      getInfoProducts();
    }, []);

    /*Función para añadir al carro de compras */
    const addToCart = ({name, id, img, price}) =>{
      const foundItem = cart.findIndex((p)=>p.id===id);
      const product = { name, id, img, price, qty: 1};
      console.log(cart)

      if(foundItem >= 0) {
        //Si encuentra el mismo id, le digo que agregue 1 al índice
        cart[foundItem].qty++;
        setCart([...cart]);
        //Si no encuentra el mismo id, agrega el producto tal cual
      }else {
        setCart([...cart, product]);
      }
    }

    /*Función para incrementar la cantidad*/
    const increment = (i) => {
      cart[i].qty++;
      setCart([...cart]);
    }

    /*Función para decrementar la cantidad */
    const decrement = (i) => {
      const { qty } = cart[i];
      if(qty === 1){
        cart.splice(i, 1);
        setCart([...cart]);
      }
      else{
        cart[i].qty--;
        setCart([...cart]);
      }
    }

      /*Función que muestra el total del carro de compras */
      const initialValue = 0;
      const total = cart.reduce(
        (previousValue, { qty, price }) => previousValue + (price * qty),
        initialValue
        );

      /*Función que muestra el total de pizzas en el carro de compras */
      const initialValuePizza = 0;
      const totalPizzas = cart.reduce(
        (previousValue, { qty }) => previousValue + qty,
        initialValuePizza
        );

      /*Función que muestra el total parcial de cada pizza */
      const getPartialTotal = (i) => {
      const pizzaTotal = i.price * i.qty
      return pizzaTotal;
      }


    return (
        /*En el ContextProvider puedo pasar todas las variables y funciones con desestructuración. Todos los children podrán acceder a esos datos. */
        <Context.Provider value={{productList, setProductList, cart, setCart, addToCart, increment, decrement, total, getPartialTotal, totalPizzas}}>
            {children}
        </Context.Provider>
    );

};


export { ContextProvider };
export default Context;