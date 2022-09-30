import classes from "./LeftBackground.module.css";
import Anna from "../../inventory/images/Anna.jpg"
import Image from "next/image";

const LeftBackground = () => {
  return (
    <>
      <Image className={classes.image}  src={Anna} alt={"Anna Zgłobicka"}/>
    </>
  );
};

export default LeftBackground;