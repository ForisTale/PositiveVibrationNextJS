import {assemblePageFromChapters} from "../pages/health/hyaluronic-mask/[pageNumber]"


describe("assemblePageFromChapters returns Fragment component with chapters ", () => {
  const CHAPTERS = [
    [
      {component: "p", id: "0"},
    ],
    [
      {component: "p", id: "1"},
      {component: "p", id: "2"},
    ],
    [
      {component: "p", id: "3"},
    ],
  ];

  test("return chapter 3 in fragment component", () => {
    const result = assemblePageFromChapters(CHAPTERS, "2");
    expect(result).toEqual([<p key={"3"}/>]);
  });

  test("returns chapters 1 & 2 in fragment component", () => {
    const result = assemblePageFromChapters(CHAPTERS, "1");
    expect(result).toEqual([<p key={"1"}/>, <p key={"2"}/>]);
  });

  test("return empty array for index smaller than 0", () => {
    const result = assemblePageFromChapters(CHAPTERS, "-1")
    expect(result).toEqual([]);
  });

  test("return emtpy array for index bigger than array size", () => {
    const result = assemblePageFromChapters(CHAPTERS, "4")
    expect(result).toEqual([]);
  });

});