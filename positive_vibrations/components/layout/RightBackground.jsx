import classes from "./RightBackground.module.css";
import Image from "next/image";
import CarouselTestBackground from "../../inventory/images/CarouselTestBackground.jpg";
import Carousel from "react-bootstrap/Carousel";
import Quotes from "../../inventory/Quotes";

const RightBackground = () => {
  const carouselQuotes = Quotes.map((quote, index) => (
    <Carousel.Item key={index} className={classes.carouselItem}>
        <Image className={classes.image} alt={"Cytat motywacyjny."} src={CarouselTestBackground}/>
        <Carousel.Caption>
            <h4>{quote.quote}</h4>
            <br/>
            <h5>{quote.author}</h5>
        </Carousel.Caption>
      </Carousel.Item>
  ));

  return (
    <Carousel>
      {carouselQuotes}
    </Carousel>
  );
};

export default RightBackground;