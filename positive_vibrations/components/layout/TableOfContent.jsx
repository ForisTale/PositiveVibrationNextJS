import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import classes from "./TableOfContent.module.css";
import {useRouter} from "next/router";
import NextPrevButton from "./NextPrevButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TableOfContent = (props) => {
  const router = useRouter();
  const pageNumber = parseInt(router.query.pageNumber);

  let linkGroup = props.pages.map((page, pageIndex) => page.map(chapter => {
    const basePageUrl = `${props.baseUrl}/${pageIndex}`;
    const isOnActivePage = basePageUrl === router.asPath.split("#")[0];
    return (
      <ListGroup.Item
        className={`${isOnActivePage ? classes.activePage : ""}`}
        key={chapter.id}
      >
        <Link href={`${basePageUrl}/#${chapter.id}`} passHref><a>{chapter.title}</a></Link>
      </ListGroup.Item>
    );
  }));

  return (
    <>
      <Row className={classes.buttonsRow}>
        <Col className={`${pageNumber === 0 ? classes.disabled : ""}`}>
          <NextPrevButton url={`${props.baseUrl}/${pageNumber - 1}`}/></Col>
        <Col className={`${pageNumber === (props.pages.length - 1) ? classes.disabled : ""}`}
        ><NextPrevButton url={`${props.baseUrl}/${pageNumber + 1}`} next/></Col>
      </Row>
      <Row className={classes.rowSeparator}/>
      <Accordion className={classes.table}>
        <Accordion.Item eventKey={"0"}>
          <Accordion.Header>Spis Treści</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {linkGroup}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </>
  );
};

export default TableOfContent;