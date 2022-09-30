import Link from "next/link";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import {CategoriesLinksBase} from "../../inventory/URLS";

const Header = () => {

  const navItems = CategoriesLinksBase.map(link => (
    <Link key={link.title} href={link.to} activeClassName={classes.active} passHref>
      <Nav.Link>{link.title}</Nav.Link>
    </Link>
  ));

  return (
    <header className={classes.header}>
      <NavBar collapseOnSelect expand={"sm"} className={classes.navBar}>
        <Container fluid>
          <Link href={"/"}>
            <a className={classes.logoLink}><NavBar.Brand className={classes.logo}>Anna Zgłobicka</NavBar.Brand></a>
          </Link>
          <NavBar.Toggle aria-controls={"offcanvasNavbar-expand-sm"}/>
          <NavBar.Offcanvas id={"offcanvasNavbar"} aria-labelledby={"offcanvasNavbar-expand-sm"} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbar-label"}>
                <h4 className={classes.canvasTitle}>Anna Zgłobicka</h4>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={classes.nav}>
                {navItems}
              </Nav>
            </Offcanvas.Body>
          </NavBar.Offcanvas>
        </Container>
      </NavBar>
    </header>
  );
};

export default Header;