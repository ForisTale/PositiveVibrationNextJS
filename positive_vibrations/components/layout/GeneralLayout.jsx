import styles from "./GeneralLayout.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import LeftBackground from "./LeftBackground";
import RightBackground from "./RightBackground";
import Footer from "./Footer";


const hideOnMobile = "d-none d-md-block"

const GeneralLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header/>
      <Container fluid>
        <Row className={styles.headerSeparator}/>
        <Row className={styles.contentRow}>
          <Col className={`${hideOnMobile} ${styles.leftBackground}`}><LeftBackground/></Col>
          <Col as={"main"} className={styles.centerCol}>
            {props.children}
          </Col>
          <Col className={`${hideOnMobile} ${styles.rightBackground}`}><RightBackground/></Col>
        </Row>
        <Row className={styles.footerSeparator}/>
      </Container>
      <Footer/>
    </div>
  );
};

export default GeneralLayout;