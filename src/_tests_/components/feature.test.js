/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Feature from "../../components/feature";

describe("<Feature />", () => {
  it("renders the <Feature /> with populated data", () => {
    const { container, getByText, getByAltText } = render(
      <Feature>
        <Feature.Title>Unlimited films & Series Curated By Yasir Gaji.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <Feature.Picture src="/images/misc/home-tv.jpg" />
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(
      getByText("Watch anywhere. Cancel at any time.")
    ).toBeTruthy();
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  // it("renders the <Feature /> with just a title", () => {
  //   const { container, getByText, queryByText, queryByAltText } = render(
  //     <Feature>
  //       <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
  //     </Feature>
  //   );

  //   expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
  //   expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
  //   expect(queryByAltText("Tiger King on Netflix")).toBeFalsy();
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it("renders the <Feature /> with just a subtitle", () => {
  //   const { container, getByText, queryByText, queryByAltText } = render(
  //     <Feature>
  //       <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
  //     </Feature>
  //   );

  //   expect(
  //     getByText("Watch anywhere. Cancel at any time.")
  //   ).toBeTruthy();
  //   expect(queryByText("Unlimited films, TV programmes and more.")).toBeFalsy();
  //   expect(queryByAltText("Tiger King on Netflix")).toBeFalsy();
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it("renders the <Feature /> with just a picture", () => {
  //   const { container, getByAltText, queryByText, queryByAltText } = render(
  //     <Feature>
  //       <Feature.Picture src="/images/misc/home-tv.jpg" />
  //     </Feature>
  //   );

  //   expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
  //   expect(queryByText("Unlimited films, TV programmes and more.")).toBeFalsy();
  //   expect(queryByText("Watch anywhere. Cancel at any time")).toBeFalsy();
  //   expect(container.firstChild).toMatchSnapshot();
  // });

});