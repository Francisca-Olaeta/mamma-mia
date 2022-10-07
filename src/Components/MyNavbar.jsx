import { React, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function MyNavbar() {
    const {productList, setProductList} = useContext(Context);
    const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");

    const navigate = useNavigate();

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <NavLink end
        className={ setActiveClass }
        to="/">
            Pizzería Mamma Mía!
        </NavLink>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
              Carro de compras 🛒
              Total: $<span></span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar