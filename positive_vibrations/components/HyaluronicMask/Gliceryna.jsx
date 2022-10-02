import classes from "./Gliceryna.module.css";
import Accordion from "react-bootstrap/Accordion";

const Chapter = () => {
  return (
    <section id={"gliceryna"}>
      <h2>Gliceryna</h2>
      <br/>
      <ul className={classes.list}>
        <li>silnie i dogłębnie nawilża i regeneruje skórę</li>
        <li>gromadzi wodę i wiąże ją w naskórku skóry. Jej działanie utrzymuje się nawet do 24 godzin po aplikacji</li>
        <li>zwiększa elastyczność skóry, nadaje jej gładkość</li>
        <li>sprawia, że skóra staje się bardziej elastyczna i napięta,
          wygładza zmarszczki
        </li>
        <li>przyspiesza procesy regeneracyjne</li>
        <li>doskonale nawilża odwodnioną cerę</li>
        <li>świetnie chroni przed mrozem i wiatrem</li>
        <li>w kosmetykach do włosów – wzmacnia słabe i wypadające włosy, nadaje im blask, wygładza rozdwojone
          końcówki.
        </li>
      </ul>
        <br/>
        <Accordion>
          <Accordion.Item eventKey={"0"}>
            <Accordion.Header>Informacje dodatkowe:</Accordion.Header>
            <Accordion.Body className={classes.list}>
              <p>Gliceryna, zwana również glicerolem, to alkohol trójwodorotlenowy. Jest produktem ubocznym procesu produkcji
          mydła. To gęsta, bezbarwna i bezwonna ciecz o słodkawym smaku. Bardzo dobrze rozpuszcza się w wodzie oraz w
          alkoholu. Glicerynę ze względu na sposób pozyskiwania dzielimy na:</p>
        <ul>
          <li>naturalną – wytwarzaną poprzez zmydlenie tłuszczu roślinnego (najczęściej jest to olej palmowy lub olej
            kokosowy). Możliwe jest też stworzenie gliceryny z wykorzystaniem tłuszczu zwierzęcego
          </li>
          <li>syntetyczną – uzyskiwaną z propylenu, który jest gazowym węglowodanem wytwarzanym z benzyny.</li>
        </ul>
        <br/>
        <p>Większość używanej w przemyśle gliceryny jest produkowana w sposób syntetyczny, jednak sposób wytworzenia tej
          substancji nie ma wpływu na jej działanie na organizm. W składzie kosmetyków możemy ją znaleźć pod nazwą
          ‘’Glycerin’’</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      <br/>
    </section>
  )
};


export default Chapter;