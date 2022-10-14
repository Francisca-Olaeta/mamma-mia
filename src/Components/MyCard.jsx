import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';


function MyCard({product}) {

  const { addToCart, cart } = useContext(Context)

  const navigate = useNavigate();

  /*Función para agregar a la url el nombre o id del producto con useNavigate. En este caso, {product} retorna todo, por lo que debo asignar "id" o "name" dentro de la función onClick con (product.name) o (product.id) */
  const getDetailsLink = (product) => {
        navigate(`/pizza/${product}`)
    };


  return (
    <Card className="col-xl-3 col-lg-4 col-sm-8 m-3 p-0 text cardflt hvr-grow">
      <Card.Img className='cardflt__img' variant="top" src={product.img} alt={product.name} />
    
      <Card.Body>

      <div className='d-flex justify-content-between align-items-center'> 
      <Card.Title className='cardflt__title'>{product.name}</Card.Title>
      {cart.qty >= 1 ? <h3><Badge pill bg='dark' variant="success">{cart.qty}</Badge></h3> : null}
      
      </div>

      <hr />
      <div className='cardflt__wrap'>
        <div className='cardflt__body'>
          <Card.Text >
            <span className='cardflt__ing'>Ingredientes:</span>
            {product.ingredients.map((ing, i)=>(
              <li key={i}>🍕 {ing}</li>
              ))}
          </Card.Text>
          </div>
          <div className='cardflt__btns'>
            <p className='cardflt__price'>Precio: $<span>{product.price.toLocaleString("es-CL")}</span></p>
            {/* En la función getDetails estoy pidiendo que me retorne product.name, eso es lo que me va a retornar useParams en vista Detalles */ }
            <Button variant="outline-danger" onClick={ () => getDetailsLink(product.id)} className='mb-2'> Ver más</Button>
            <Button variant="danger" onClick={ () => addToCart(product)}>Añadir</Button>
          </div>
      </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;