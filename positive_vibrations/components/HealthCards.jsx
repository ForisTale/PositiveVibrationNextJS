import Card from "./Layout/Card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SUMMARY from "../inventory/HealthSummaryDescription";
import classes from "./HealthCards.module.css";

export const divideIntoGroups = (elementsToDivide) => {
  const dividedGroups = [];
  const itemsPerRow = 2;
  for (let index = 0; index < elementsToDivide.length; index += itemsPerRow) {
    dividedGroups.push(elementsToDivide.slice(index, index + itemsPerRow))
  }
  return dividedGroups;
};

export const assemblyRows = (elementsToAssembly) => {
  const groupedElements = divideIntoGroups(elementsToAssembly);

  const rows = groupedElements.map((elements, index) => {
    return <Row key={`row${index}`} className={classes.cardRow}>
      {elements.map((element, index) => <Col
        className={`col-12 col-xxl-${elements.length === 3 ? "4" : "6"} ${classes.cardCol}`}
        key={`col${index}`}
      ><Card
        title={element.title}
        description={element.description}
        image={element.image}
        url={element.url}
        isVideo={element.isVideo}
      /></Col>)}
    </Row>
  });

  return <>{rows}</>;
};



const HealthCards = () => {
  const rows = assemblyRows(SUMMARY);

  return <>{rows}</>;
};

export default HealthCards;