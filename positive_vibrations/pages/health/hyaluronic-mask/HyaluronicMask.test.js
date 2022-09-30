import {getPageIndex} from "./[pageNumber]"

jest.mock("../../../components/hyaluronic-mask", () => ({AllPages: [0, 1, 2]}));

describe("getPageNumber function", () => {

  test("return 1 for '1'", () => {
    const pageNumber = getPageIndex("1");
    expect(pageNumber).toEqual(1);
  });

  test("return 2 for '2.2'", () => {
    const pageNumber = getPageIndex("2.2");
    expect(pageNumber).toEqual(2);
  });

  test("return 0 for '3'", () => {
    const pageNumber = getPageIndex("3");
    expect(pageNumber).toEqual(0);
  })

  test("return 0 for '4'", () => {
    const pageNumber = getPageIndex("4");
    expect(pageNumber).toEqual(0);
  })

  test("return 0 for 'a'", () => {
    const pageNumber = getPageIndex("a");
    expect(pageNumber).toEqual(0);
  })

  test("return 0 for '0'", () => {
    const pageNumber = getPageIndex("0");
    expect(pageNumber).toEqual(0);
  })

  test("return 0 for '-1'", () => {
    const pageNumber = getPageIndex("-1");
    expect(pageNumber).toEqual(0);
  })
});