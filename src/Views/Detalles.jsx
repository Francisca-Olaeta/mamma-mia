import React from 'react';
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../Context';
import CardDetail from '../Components/CardDetail';
import { Container } from 'react-bootstrap';


const Detalles = () => {

  /*useParams es la otra cara de useNavigate. Acá le estoy diciendo que me retorne la propiedad name de product. */
  const { id } = useParams();
  const navigate = useNavigate();

  /*Paso variables a través del Context */
  const {productList, setProductList} = useContext(Context)
  
console.log(productList)
 const selectedProduct = productList.filter((e) => e.id === id);
 console.log(selectedProduct)
 console.log(selectedProduct.length);


  return (
    <>
    <Container fluid className="row justify-content-center align-items-center">
    {selectedProduct.length > 0 ? selectedProduct.map((e) => (
      <CardDetail selectedProduct={e} />
    )):null
    }

    </Container>
    
    </>
  )
}

export default Detalles