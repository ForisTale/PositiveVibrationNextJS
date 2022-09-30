import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Layout/Card/Card";
import {assemblyRows, divideIntoGroups} from "./HealthCards";

function createTestCase(length) {
  const testCase = [];
  for (let index = 0; index < length; index++) {
    testCase.push({
      title: "Test " + index,
      description: "Desc " + index,
      image: "img " + index,
      url: "url " + index,
      isVideo: false,
    })
  }
  return testCase;
}

describe("creating rows with max 2 cols inside each", () => {
  test("case with five elements", () => {
    const testCase = createTestCase(5);
    const result = assemblyRows(testCase);

    const expectedValue = (<React.Fragment>
      <Row className="cardRow" key={"row0"}>
        <Col className={"col-12 col-xxl-6 cardCol"} key={"col0"}><Card
          title={"Test 0"}
          description={"Desc 0"}
          image={"img 0"}
          url={"url 0"}
          isVideo={false}
        /></Col>
        <Col className={"col-12 col-xxl-6 cardCol"} key={"col1"}><Card
          title={"Test 1"}
          description={"Desc 1"}
          image={"img 1"}
          url={"url 1"}
          isVideo={false}
        /></Col>
      </Row>
      <Row className="cardRow" key={"row1"}>
        <Col className={"col-12 col-xxl-6 cardCol"} key={"col0"}><Card
          title={"Test 2"}
          description={"Desc 2"}
          image={"img 2"}
          url={"url 2"}
          isVideo={false}
        /></Col>
        <Col className={"col-12 col-xxl-6 cardCol"} key={"col1"}><Card
          title={"Test 3"}
          description={"Desc 3"}
          image={"img 3"}
          url={"url 3"}
          isVideo={false}
        /></Col>
      </Row>
      <Row className="cardRow" key={"row2"}>
        <Col className={"col-12 col-xxl-6 cardCol"} key={"col0"}><Card
          title={"Test 4"}
          description={"Desc 4"}
          image={"img 4"}
          url={"url 4"}
          isVideo={false}
        /></Col>
      </Row>
    </React.Fragment>);
    expect(result).toEqual(expectedValue);
  });
});

describe("Divide into groups", () => {
  test("case with three elements", () => {
    const testCase = [1, 2, 3];
    const result = divideIntoGroups(testCase);
    expect(result).toEqual([[1, 2], [3]]);
  })

  test("case with two elements", () => {
    const testCase = [1, 2];
    const result = divideIntoGroups(testCase);
    expect(result).toEqual([[1, 2]]);
  })

  test("case with five elements", () => {
    const testCase = [1, 2, 3, 4, 5];
    const result = divideIntoGroups(testCase);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  })

  test("emtpy case", () => {
    const testCase = [];
    const result = divideIntoGroups(testCase);
    expect(result).toEqual([]);
  });
});
