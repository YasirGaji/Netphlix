/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Card, Player } from "../../components";
// import { cardData } from "../../fixtures/cardData.json";

const category = "series";
const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        description: "Tiger King description",
        docId: "1",
        genre: "documentaries",
        id: "1",
        maturity: "18",
        slug: "tiger-king",
        title: "Tiger King",
      },
    ],
  },
  {
    title: "Comedies",
    data: [
      {
        description: "The Office description",
        docId: "2",
        genre: "comedies",
        id: "2",
        maturity: "15",
        slug: "the-office",
        title: "The Office",
      },
    ],
  },
];

describe("<Card />", () => {
  it("renders the <Card /> with populated data", () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/thanks.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText("Documentaries")).toBeTruthy();
    expect(getByText("Tiger King")).toBeTruthy();
    expect(getByText("Tiger King description")).toBeTruthy();

    expect(getByText("Comedies")).toBeTruthy();
    expect(getByText("The Office")).toBeTruthy();
    expect(getByText("The Office description")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
 
  });
});