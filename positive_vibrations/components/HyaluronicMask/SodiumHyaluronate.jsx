import classes from "./SodiumHyalutonate.module.css";

const Chapter = () => {
  return (
    <section id={"sodiumHyaluronate"}>
      <h2>Kwas Hialuronowy / Sodium Hyaluronate</h2>
      <p>Kwas hialuronowy to jedna z topowych substancji, która zdominowała rynek kosmetyczny. Może występować w różnych
        formach. </p>
      <ul className={classes.list}>
        <li><b>Sodium Hyaluronate</b> jest silnym humektantem. Ma zdolność wiązania wody.</li>
        <li>Działa nawilżająco i zmiękczająco na skórę oraz włosy.</li>
        <li>Ogranicza przeznaskórkową utratę wody.</li>
        <li>Silnie wygładza naskórek.</li>
        <li>Wypełnia drobne zmarszczki mimiczne (efekt chwilowy, po zmyciu preparatu skóra wraca do pierwotnego
          stanu).
        </li>
        <li>Pełni funkcję stabilizującą dany preparat, przez funkcję wiązania wody zatrzymuje w nim wilgoć. Zapobiega
          szybszemu wysychaniu.
        </li>
        <li>Działa przeciwzapalnie.</li>
        <li>Przyspiesza odnowę komórkową skóry.</li>
        <li>Poprawia wizualny wygląd blizn, rozstępów.</li>
        <li>Pełni funkcję antyoksydacyjną.</li>
      </ul>
      <br/>
    </section>
  )
};


export default Chapter;