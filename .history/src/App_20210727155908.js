import React from 'react'
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo'

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
