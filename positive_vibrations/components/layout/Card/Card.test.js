import Card from "./Card";
import {render, screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("Card component", () => {
  function setUpObjectToTest(jsxObjectToTest) {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        {jsxObjectToTest}
      </Router>
    );
  }

  test("render button video text if it's video", () => {
    setUpObjectToTest(<Card url={"/"} isVideo/>);

    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toHaveTextContent("filmu");
    expect(buttonElement).not.toHaveTextContent("artykułu");
  });

  test("render button text artykułu if it isn't video", () => {
    setUpObjectToTest(<Card url={"/"}/>);

    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toHaveTextContent("artykułu");
    expect(buttonElement).not.toHaveTextContent("filmu");
  });

});