import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MyCard({product}) {
  const navigate = useNavigate();

  /*Función para agregar a la url el nombre o id del producto con useNavigate. En este caso, {product} retorna todo, por lo que debo asignar "id" o "name" dentro de la función onClick con (product.name) o (product.id) */
  const getDetailsLink = (product) => {
        navigate(`/pizza/${product}`)
    };

  return (
    <Card className="col-xl-3 col-lg-4 col-md-6 col-sm-12 m-3 p-0">
      <Card.Img variant="top" src={product.img} alt={product.name} />
    
      <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <hr />
        <Card.Text>
          Ingredientes:
          {product.ingredients.map((ing, i)=>(
            <li key={i}>🍕 {ing}</li>
          ))}
        </Card.Text>
        <p>Precio: $<span>{product.price}</span></p>
        {/* /*En la función getDetails estoy pidiendo que me retorne product.name, eso es lo que me va a retornar useParams en vista Detalles */ }
        <Button variant="outline-danger" onClick={ () => getDetailsLink(product.id)}> Ver más</Button>
        <Button variant="danger">Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;