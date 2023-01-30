import React from 'react';
import Jumbotron  from './components/jumbotron';
import jumboData from './fixtures/jumbo';


export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          <Jumbotron.Image>{item.image}</Jumbotron.Image>
          <Jumbotron.Image>{item.alt}</Jumbotron.Image>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

