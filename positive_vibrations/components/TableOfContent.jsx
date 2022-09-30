import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import classes from "./TableOfContent.module.css";
import {useRouter} from "next/router";

const TableOfContent = (props) => {
  const router = useRouter();

  const linkGroup = props.allPages.map((page, index) => {
    const pageUrl = `${props.baseUrl}/${index}`;
    const isOnActivePage = pageUrl === router.asPath;
    return (
      <ListGroup.Item
      className={`${isOnActivePage ? classes.activePage : ""}`}
        key={page.title}
      >
        {isOnActivePage
          ? page.title
          : <Link href={pageUrl} passHref><a>{page.title}</a></Link>}
      </ListGroup.Item>
    );
  });

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