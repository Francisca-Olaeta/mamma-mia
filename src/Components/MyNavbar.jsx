import { React, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import Context from '../Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function MyNavbar() {
  /*Estados que provee el Context */
    const { total, totalPizzas } = useContext(Context);

  /*Clases activas y clases inactivas */
    const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");


  return (
    <>
    <Navbar sticky="top" bg="dark" collapseOnSelect expand="lg" variant="dark">
      <Container className="color-nav">
        <NavLink end
        className= { setActiveClass }
        to="/">
            Pizzería Mamma Mía!
        </NavLink>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto color-nav">
            {/* <NavDropdown title="Selecciona tu pizza" id="collasible-nav-dropdown">
                {productList.map((e)=>(
                    <NavDropdown.Item href="#" key={e.id}>
                        <NavLink className={ setActiveClass } to="/pizza">
                        {e.name}
                        </NavLink>
                    </NavDropdown.Item>
                ))}
            </NavDropdown> */}
          </Nav>

          <Nav>
            <NavLink className={ setActiveClass } to="/carrito">
            <FontAwesomeIcon className='me-2' icon={faCartShopping} />
            {/* /*Si el total de pizzas es distinto a 0, mostrará una badge roja con el número de productos al lado del carrito de compras */ }
            {totalPizzas !== 0 ? <Badge className='me-2 px-2' pill bg='danger'>{totalPizzas}</Badge> : null}
            Total: $<span>{ total.toLocaleString("es-CL") }
            </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar