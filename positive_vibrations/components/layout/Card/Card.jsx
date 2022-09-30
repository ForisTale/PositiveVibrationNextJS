import BootstrapCard from "react-bootstrap/Card";
import classes from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <BootstrapCard className={classes.card}>
      <BootstrapCard.Img variant={"top"} src={props.image} as={Image}/>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.description}</BootstrapCard.Text>
      </BootstrapCard.Body>
      <BootstrapCard.Footer>
        <Link href={props.url}>
          <a className={"btn btn-primary"}>
            Przejdź do {props.isVideo ? "filmu" : "artykułu"}
          </a>
        </Link>
      </BootstrapCard.Footer>
    </BootstrapCard>
  );
};

export default Card;