import { React, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import MyCard from './MyCard';
import Context from '../Context';

function Grid({data}) {

  const { productList } = useContext(Context);

  return (
    <Container fluid className="row justify-content-center padding-0 my-4">
      {data.map((p, i)=>(
        <MyCard product={p} key={i}></MyCard>
      ))}
    </Container>
  );
}

export default Grid;