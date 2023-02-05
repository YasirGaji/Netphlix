/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Accordion } from "../../components";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordion />", () => {
  it("renders the <Accordion /> with populated data", () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is Netphlix?")).toBeTruthy();
    expect(getByText("How much does Netphlix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netphlix?")).toBeTruthy();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens and closes the <Accordion /> component", () => {
    const { queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    const whatIsNetphlixBodyText = "Netphlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.";

    const howMuchDoesNetphlixCostBodyText = "Watch Netphlix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from ₦300.99 a month. No extra costs or contracts.";



    expect(queryByText(whatIsNetphlixBodyText)).toBeFalsy();
    fireEvent.click(queryByText("What is Netphlix?"));

    expect(queryByText(howMuchDoesNetphlixCostBodyText)).toBeFalsy();
    fireEvent.click(queryByText("How much does Netphlix cost?"));

  });

})