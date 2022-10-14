import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faSquareInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <Navbar position="bottom" variant="dark" bg="dark" className='footer'>
        <Container className='footer__container'>
          <h4 className='margin-0 footer__title'>Pizzería Mamma Mía!</h4>
          <Container variant="dark" className='footer__container'>
          <p className='mb-1'>Síguenos en redes sociales 👩‍💻👨‍💻</p>
          <div className='d-flex'>
          <FontAwesomeIcon className='me-3 fa-xl hvr-grow socialmedia' icon={faFacebook} />
          <FontAwesomeIcon className='me-3 fa-xl hvr-grow socialmedia' icon={faSquareInstagram} />
          <FontAwesomeIcon className='me-3 fa-xl hvr-grow socialmedia' icon={faTwitter} />
          </div>
          
           
          <p className='margin-0 footer__text'>2022 Pizzería Mamma Mía!</p>
          </Container>
        </Container>
    </Navbar>
  )
}

export default Footer