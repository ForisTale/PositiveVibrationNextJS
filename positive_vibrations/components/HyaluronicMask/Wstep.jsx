import Row from "react-bootstrap/Row";
import classes from "./Wstep.module.css";
import {PAGES} from "./index";

const Wstep = () => {
  const pageList = [];
    PAGES.map((page) => page.map(chapter => {
      pageList.push(<li key={chapter.id}>{chapter.title}</li>)
    }));

  return (
    <section id={"wstep"}>
      <Row>
        <h1>MASKA HIALURONOWA</h1>
        <h2>Rytuał trzech kroków</h2>
        <div className={classes.br}/>
        <p className={classes.text}>Inspirowany azjatyckim rytuałem pielęgnacyjnym, unikalny <b>rytuał trzech
          kroków </b> Skinonly Routine: <b>detoks</b>, <b>nawilżenie</b>, <b>odmłodzenie</b>.
          <br/>Został stworzony dla osiągnięcia najlepszych efektów, które gwarantują młodzieńczy wygląd i głębokie
          nawilżenie.
          Regularne stosowanie rytuału błyskawicznie przywróci skórze piękny wygląd, poprawi jej kondycję i zniweluje
          niedoskonałości.
          Wszystkie maski świetnie sprawdzą się w pielęgnacji każdego typu skóry, zarówno młodszej, jak i dojrzałej.
          Niewątpliwym atutem jest fakt, że z rytuału Skinonly Routine mogą korzystać zarówno kobiety, jak i
          mężczyźni.</p>
      </Row>
      <div className={classes.br}/>
      <Row>
        <figure className={classes.figure}>
          <figcaption>W SKŁAD ZESTAWU WCHODZĄ:</figcaption>
          <ol>
            <li>Aloesowa Maska Detoksykujaca</li>
            <li>Hialuronowa Maska Nawilżająca</li>
            <li>Kawiorowa Maska Przeciwstarzeniowa</li>
          </ol>
        </figure>
      </Row>
      <Row className={classes.text}>
        <p>Czym jest Hialuronowa Maska Nawilżająca – jakie jej składniki wpływają na opisywany wyżej efekt? <br/>
          Otóż w jej skład wchodzi ponad 20 składników. Przyjrzyjmy się tym składnikom, ich znaczeniu i oddziaływaniu na
          naszą skórę. <br/>
          Podstawowym składnikiem jest WODA, która stanowi bazę i jest nośnikiem innych substancji. </p>
        <figure className={classes.figure}>
          <figcaption>Pozostałe składniki:</figcaption>
          <ul>
            {pageList.slice(1)}
            <b>...</b>
          </ul>
        </figure>
      </Row>
    </section>
  );
};

export default Wstep;