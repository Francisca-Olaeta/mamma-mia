import { React, useContext } from 'react';
import Hero from '../Components/Hero';
import Context from '../Context';
import Grid from '../Components/Grid';


const Home = () => {

  /*Paso variables a través del Context */
  const {productList} = useContext(Context);

  

  return (
    <div>
        <Hero />
        <Grid data={productList}/>
        {/* <Carrusel /> */}
    </div>
  )
}

export default Home