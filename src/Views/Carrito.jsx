import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import { Container, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const Carro = () => {

  const { cart, increment, decrement, total, getPartialTotal } = useContext(Context);

  const navigate = useNavigate();
  
  return (
    <Container className='cartdflt'>

      <h2 className='mb-5'>Detalle de tu pedido:</h2>
  {/* /*Renderizado de los elementos que están dentro del carro */}
        {cart.map((p, i) => (
          <div className='d-flex flex-row justify-content-between align-items-center mb-3' key={p.id}>
            <div className='imgAndName'>
              <img className='imgAndName__img' width="50" src={p.img} alt={p.name} />
              <div className='text imgAndName__name'>{p.name}</div>
            </div>
            <div className='qtyAndPrice'>
              <div className='qtyAndPrice__price'>${getPartialTotal(p).toLocaleString("es-CL")}</div>

              {/* /*Función para decrementar la cantidad de pizzas */}
              <Button onClick={()=>decrement(i)}variant='danger' size='sm'>
              <FontAwesomeIcon className='fa-xl' icon={faMinus} />
              </Button>

              <div className='qtyAndPrice__qty'>{p.qty}</div>

              {/* /*Función para aumentar la cantidad de pizzas */}
              <Button onClick={()=>increment(i)} variant='danger' size='sm'>
              <FontAwesomeIcon className='fa-xl' icon={faPlus} />
              </Button>
              <hr className='d-flex flex-column' />
            </div>
          </div>
            ))}
{/* 
            /*Si el total es 0, muestra un mensaje "tu carro está vacío" y no mostrará el botón para hacer el pedido */}
            {total === 0 ? <h4>Tu carrito está vacío</h4> : null}
            <Button onClick={()=> navigate(`/`)} variant="outline-danger" className="mt-2 justify-content-end">{total === 0 ? "Agregar pizzas al carro" : "Agregar más"}</Button>
            
            <div className='d-flex'>
              {total !== 0 ?
            <Button className="total d-flex justify-content-between px-4" variant='success' width="100">Hacer pedido <span>${total.toLocaleString("es-CL")}</span></Button> : null }
              
              
            </div>

    </Container>
  )
}

export default Carro