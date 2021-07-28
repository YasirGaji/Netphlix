import React from 'react'
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo'

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
