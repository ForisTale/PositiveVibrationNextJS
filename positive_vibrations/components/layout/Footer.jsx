import classes from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import {CategoriesLinksBase} from "../../inventory/URLS";


const Footer = () => {
  const links = CategoriesLinksBase.map(link => <li key={link.to}>
    <Link href={link.to} passHref><a>{link.title}</a></Link></li>)


  return (
    <footer className={classes.siteFooter}>
      <Container>
        <Row>
          <Col className={classes.about}>
            <h5>About</h5>
            <p>Tekst o czym jest ta strona.</p>
          </Col>
          <Col className={classes.links}>
            <h5>Categories</h5>
            <ul>
              {links}
            </ul>
          </Col>
        </Row>
        <Row className={classes.copyright}>
          <p>Copyright &copy; 2022 All Rights Reserved by <Link href={"https://foris.dev/"} passHref><a>Foris</a></Link></p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;