import React from 'react'
import Container from 'react-bootstrap/Container';
import MyCard from './CardDetail';

function Grid({data}) {

  return (
    <Container fluid className="row justify-content-center padding-0">
      {data.map((p)=>(
        <MyCard product={p} ></MyCard>
      ))}
    </Container>
  );
}

export default Grid;