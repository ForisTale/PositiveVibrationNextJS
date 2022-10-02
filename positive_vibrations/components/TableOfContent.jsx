import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import classes from "./TableOfContent.module.css";
import {useRouter} from "next/router";

const TableOfContent = (props) => {
  const router = useRouter();

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
  );
};

export default TableOfContent;