import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function MyCard({selectedProduct}) {
const {productList, setProductList} = useContext(Context);

const navigate = useNavigate();

if ({productList}=== undefined) {
return 
<div>
  <p>Está cargando</p>

</div>

}

  return (
    <Card className='col-lg-6 mt-3 p-0' key={selectedProduct.id}>
      <Card.Img variant="top" src={selectedProduct.img} />
      <Card.Body>
        <hr />
        <Card.Title>{selectedProduct.name}</Card.Title>
        <Card.Text>
          {selectedProduct.desc}
        </Card.Text>
        <Card.Text>
          <p>Ingredientes:</p>
          {selectedProduct.ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </Card.Text>
        <p>Precio: <span>${selectedProduct.price}</span></p>
        <Button variant="danger">Añadir</Button>
        <Button variant="light" onClick={()=> navigate(`/`)}>Volver</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;