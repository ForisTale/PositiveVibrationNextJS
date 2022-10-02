import classes from "./HyaluronicAcid.module.css";

const Chapter = () => {
  return (
    <section id={"hyaluronicAcid"}>
      <h2>Kwas Hialuronowy</h2>
      <p>Kwas hialuronowy stanowi substancję, która w stanie naturalnym występuje w naszym organizmie jako hialuronian
        sodu.</p>
      <div className={classes.list}>
        <p>Największa jego ilość znajduje się w:</p>
        <ul>
          <li>skórze</li>
          <li>mazi stawowej</li>
          <li>gałkach ocznych</li>
          <li>wchodzi on także w skład tkanki łącznej</li>
          <li>płynów ustrojowych</li>
          <li>ścian naczyń krwionośnych.</li>
        </ul>
      </div>
      <p>Pod względem chemicznym wcale nie jest on kwasem, lecz wielocukrem występującym w formie półtransparentnej
        cieczy, która swoją konsystencją przypomina żel. </p>
      <p>Do najważniejszych zadań kwasu hialuronowego należy wiązanie wody w organizmie. </p>
      <p>Im jesteśmy starsi, tym mniej tej substancji znajduje się w naszym ciele, a skóra traci elastyczność i jest
        odwodniona. Z tego powodu, aby zachować młodość na dłużej, często korzystamy z takich preparatów jak kwas
        hialuronowy w postaci kremów, kapsułek tudzież iniekcji. </p>
      <p>Kwas hialuronowy należy do najważniejszych w kosmetyce substancji i cieszy się ogromną popularnością wśród
        kobiet, które preferują naturalną pielęgnację urody.</p>
      <div className={classes.list}>
        <p>Za sprawą jego szczególnych zdolności:</p>
        <ul>
          <li>łączenia włókien kolagenowych</li>
          <li>i wiązania cząsteczek wody,</li>
          <li>jest doskonałym środkiem pomagającym utrzymać skórę w dobrej kondycji.</li>
          <li>Świetnie nawilża, odżywia i wygładza naskórek.</li>
          <li>W medycynie estetycznej jest wykorzystywany do wypełniania zmarszczek, poprawiania owalu twarzy, korekty
            kształtu nosa, a także powiększania ust.
          </li>
        </ul>
      </div>
      <br/>
    </section>
  )
};


export default Chapter;