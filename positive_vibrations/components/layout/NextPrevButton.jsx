import {Button} from "react-bootstrap";
import Link from "next/link";
import styles from "./NextPrevButton.module.css";

const NextPrevButton = (props) => {
  return (
    <Button className={styles.button}>
      <Link href={props.url} passHref><a>{props.next ? "Następna Strona" : "Poprzednia Strona"}</a></Link>
    </Button>
  );
};

export default NextPrevButton;