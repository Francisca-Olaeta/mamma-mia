import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';


function Carrusel({data}) {


  return (
    <>
     <Carousel>
    {data.map((e)=>(
      <Carousel.Item key={e.id}>
        <img
          className="d-block w-100"
          src={e.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{e.name}</h3>
          <p>{e.ingredients.map((ing, i) =>(
            <li key={i}>{ing}</li>
          ))}</p>
        </Carousel.Caption>

        <p>Precio: <span className='price'>${e.price}</span></p>

        <div className='btns'>
            <Button>Ver más</Button>
            <Button>Añadir</Button>
        </div>
      </Carousel.Item>
    ))}
    </Carousel>
    </>
  );
}

export default Carrusel;