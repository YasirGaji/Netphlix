import React from "react";
import { render, fireEvent, } from "@testing-library/react";
import { Player } from "../../components";

describe("<Player />", () => {
  it("renders the <Player /> with a thanks video", () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/thanks.mp4" />
      </Player>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByTestId("player")).toBeFalsy();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("Play"));

    // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/prefer-presence-queries
    expect(queryByTestId("player")).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(queryByTestId("player"));

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByTestId("player")).toBeFalsy();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});