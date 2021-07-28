import React from 'react'
import { Jumbotron } from '../components/jumbotron';
import jumboData from '../fixtures/jumbo'

export default function JumbotronContainer() {
  return (
    <div className="">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title className="text-2xl font-bold">{item.title}</Jumbotron.Title> <br></br>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} className="sm:align-middle" />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
