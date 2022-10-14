import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function MyCard({selectedProduct}) {
const {addToCart} = useContext(Context);

const navigate = useNavigate();

  return (
    <Card className='col-xl-4 col-lg-8 col-md-8 my-5 p-0 cardflt hvr-grow' key={selectedProduct.id}>
      <Card.Img variant="top" src={selectedProduct.img} />
      <Card.Body>
        <hr />
        <Card.Title className='text cardflt__title'>{selectedProduct.name}</Card.Title>
        <Card.Text>
          {selectedProduct.desc}
        </Card.Text>
        <div className='cardflt__wrap'>
        <Card.Text className='text'>
          <p className='cardflt__ing'>Ingredientes:</p>
          {selectedProduct.ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
            ))}
        </Card.Text>
        
        <div className='cardflt__btns'>
        <p className='cardflt__price'>Precio: <span className='price'>${selectedProduct.price.toLocaleString("es-CL")}</span></p>
        <Button variant="danger" onClick={ () => addToCart(selectedProduct)}>Añadir</Button>
        <Button variant="outline-danger" onClick={()=> navigate(`/`)}>Volver</Button>

        </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;