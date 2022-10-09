import Card from "./Card";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe("Card component", () => {
  function setUpObjectToTest(isVideo) {
    render(<Card url={"/"} isVideo={isVideo}/>);
  }

  test("render button video text if it's video", () => {
    setUpObjectToTest(true);

    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toHaveTextContent("filmu");
    expect(buttonElement).not.toHaveTextContent("artykułu");
  });

  test("render button text artykułu if it isn't video", () => {
    setUpObjectToTest(false);

    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toHaveTextContent("artykułu");
    expect(buttonElement).not.toHaveTextContent("filmu");
  });

});