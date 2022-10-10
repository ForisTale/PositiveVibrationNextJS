import {Button} from "react-bootstrap";
import styles from "./NextPrevButton.module.css";
import {useRouter} from "next/router";

const NextPrevButton = (props) => {
  const router = useRouter();

  const linkHandler = () => {
    router.push(props.url);
  };

  return (
    <Button className={styles.button} onClick={linkHandler}>
      {props.next ? "Następna Strona" : "Poprzednia Strona"}
    </Button>
  );
};

export default NextPrevButton;