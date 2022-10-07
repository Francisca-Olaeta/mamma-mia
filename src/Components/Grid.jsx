import React from 'react'
import Container from 'react-bootstrap/Container';
import MyCard from './MyCard';

function Grid({data}) {

  return (
    <Container fluid className="row justify-content-center padding-0">
      {data.map((p, i)=>(
        <MyCard product={p} key={i}></MyCard>
      ))}
    </Container>
  );
}

export default Grid;