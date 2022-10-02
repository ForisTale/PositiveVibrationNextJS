import classes from "./Peg12Dimethicone.module.css";
import Accordion from "react-bootstrap/Accordion";

const Page = () => {
  return (
    <section id={"peg12"}>
      <h2>PEG-12 Dimethicone</h2>
      <br/>
      <p>PEG jest skrótem od nazwy Polyethylene Glycol oznaczającej politlenek etylenu. To mieszanina związków
        chemicznych. Zawarte w recepturach kosmetyków PEG-i są:</p>
      <ul className={classes.list}>
        <li>emulgatorami</li>
        <li>rozpuszczalnikami</li>
        <li>składnikami konsystencjotwórczymi</li>
        <li>substancjami poprawiającymi lepkość masy kosmetycznej.</li>
      </ul>
      <p><b>PEG-12</b> — składnik nawilżający, rozpuszczalnik, chroni przed wysychaniem kosmetyku.</p>
      <Accordion>
        <Accordion.Item eventKey={"0"}>
          <Accordion.Header>Informacje dodatkowe:</Accordion.Header>
          <Accordion.Body>
            <h6><b>Niekorzystne właściwości PEG-ów</b></h6>
            <p className={classes.justify}>Z jednej strony w Internecie pojawia się mnóstwo informacji o niekorzystnym oddziaływaniu PEG-ów na
              skórę. Podobno do produkcji PEG-ów wykorzystywany jest trujący, niebezpieczny i nieobojętny dla ludzkiego
              organizmu tlenek etylenu. Jeśli jego cząsteczki dostaną się do masy kosmetycznej, a w efekcie aplikacji na
              skórę również i do organizmu wówczas może on powodować uszkodzenia komórek i działać kancerogenne. Ponadto
              zaburza barierę hydrolipidową skóry, może powodować stany zapalne, pokrzywkę, świąd, głębokie pękanie
              skóry czy zatykać pory.
              Z kosmetyków, w recepturach których znajdują się PEG-i, powinny z pewnością zrezygnować kobiety w ciąży,
              młode matki, ale też lepiej nie stosować ich do pielęgnacji dzieci i niemowląt.
              <br/>Z drugiej zaś, na przykład na stronie kosmopedia.org czytamy:</p>
            <h6><b>Czy PEG-i są bezpieczne?</b></h6>
            <p className={classes.justify}>Wszystkie składniki należące do grupy PEG-ów stosowane w kosmetykach są bezpieczne dla konsumentów. Są
              to
              substancje o dobrze poznanym profilu toksykologicznym. Są nietoksyczne, nie wykazują działania
              mutagennego
              czy genotoskyczego. Mają też dobre właściwości dermatologiczne — nie działają drażniąco i uczulająco na
              skórę, Nie ma żadnych dowodów na to, że PEG-i są odpowiedzialne za wywoływanie stanu zapalnego skóry,
              lub
              inne niekorzystne reakcje skórne, przytoczone powyżej.
              Bezpieczeństwo PEG-ów potwierdził amerykański zespół ekspertów Cosmetics Ingredients Review (CIR) Panel
              Expert. Eksperci uznali, że PEG-i nie są toksyczne po podaniu doustnym, jak i skórnym. Nie są
              genotoksyczne, rakotwórcze ani szkodliwe na rozrodczość i rozwój płodu. PEG-i mogą wykazywać niewielkie
              podrażnienie oczu i skóry, a także minimalny potencjał uczulający.
              Co więcej, część PEG-ów zostało uznanych przez amerykańską agencję FDA, jako bezpieczne do stosowania w
              żywności. Do grupy PEG-ów stosowanych, jako dodatki do żywności należą m.in.: PEG-200 Dilaurate, PEG-400
              Dioleate, PEG-400 Stearate.</p>
            <h6><b>PEG-i a działanie rakotwórcze</b></h6>
            <p className={classes.justify}>W wielu nierzetelnych źródłach można znaleźć informacje o potencjalnym działaniu rakotwórczym PEG-ów.
              Informacje te są nieprawdziwe, oparte na błędnym rozumowaniu. Prawdopodobną przyczyną powstania mitu
              dotyczącego szkodliwości PEG-ów jest to, że PEG-i mogą być zanieczyszczone związkiem 1,4-dioksanem,
              który
              wykazuje działanie rakotwórcze.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
    </section>
  )
};


export default Page;