import classes from "./IzomeratSacharydowy.module.css";

const Page = () => {
  return (
    <section id={"izomerat"}>
      <h2>Izomerat Sacharydowy (Pentawityna)</h2>
      <p>Pentavitin, Saccharine Isomerate, Saccharinum Isomerate</p>
      <br/>
      <ul className={classes.list}>
        <li>Jest to składnik długotrwale i silnie nawilżający</li>
        <li>przeciwzmarszczkowy</li>
        <li>przeciwłojotokowy</li>
        <li>polecany dla skóry odwodnionej lub suchej</li>
        <li>przyciąga i wiąże wilgoć w naskórku</li>
        <li>redukuje łuszczenie, swędzenie, podrażnienie i ściągnięcie; wygładza i zmiękcza</li>
        <li>już niewielkie stężenia znacznie poprawiają kondycję skóry</li>
        <li>stosowany w różnego rodzaju kosmetykach do twarzy, ciała i włosów</li>
        <li>jest to substancja pochodzenia naturalnego</li>
      </ul>
      <br/>
      <h5>Funkcja w kosmetyku</h5>
      <ul className={classes.list}>
        <li><b>Humektant</b> – związek silnie higroskopijny, rozpuszcza się w wodzie, związki te wykazują zdolność do
          trwałych wiązań, tym samym zatrzymując wodę z zewnątrz.

          Główny cel? Humektanty mają zwiększać ilość wody w warstwie rogowej naskórka. Możliwe jest to poprzez
          odpowiednie wiązanie wody i przeciwdziałanie jej utracie. W konsekwencji dochodzi do sytuacji, w której nasza
          skóra jest odpowiednio nawilżona i zdecydowanie bardziej elastyczna, włosy natomiast nie łamią się, a także
          nie puszą, co jest dla wielu bardzo istotne.
        </li>
        <li>substancja kojąca, łagodząca, substancja wzmacniająca naczynia krwionośne</li>
        <li>substancja nawilżająca</li>
        <li>substancja przeciwłupieżowa, wzmacniająca cebulki, stymulująca porost włosów</li>
        <li>substancja przeciwłojotokowa</li>
        <li>substancja przeciwzmarszczkowa</li>
        <li>substancja wygładzająca</li>
        <li>substancja zmiękczająca</li>
        <li>Bezpieczne dla kobiet w ciąży.</li>
      </ul>
      <br/>
    </section>
  )
};


export default Page;