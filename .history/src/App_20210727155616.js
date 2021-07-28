import React from 'react'
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo'

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.subTitle>{item.subTitle}</Jumbotron.subTitle>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
