import classes from "./GlikolPropylenowy.module.css"
import Accordion from "react-bootstrap/Accordion";

const Page = () => {
  return (
    <section id={"glikolPropylenowy"}>
      <h2>Glikol Propylenowy</h2>
      <p>Propylene Glycol / Propano-1,2-diol, Propylenglycolum</p>
      <br/>
      <ul className={classes.list}>
        <li>ma zdolność przenikania do warstwy rogowej naskórka</li>
        <li>ułatwia transport innych substancji w głąb skóry</li>
        <li>zapobiega wysychaniu masy kosmetycznej</li>
        <li>jest bezbarwną, bezzapachową, oleistą cieczą, o słodkawym smaku, wysokiej lepkości oraz bardzo wysokiej
          higroskopijności
        </li>
        <li>rozpuszczalny m.in. w wodzie, acetonie i chloroformie</li>
        <li>stężenie w kosmetyku może być bardzo wysokie.</li>
      </ul>
      <br/>
      <Accordion>
        <Accordion.Item eventKey={"0"}>
          <Accordion.Header>Kontrowersje</Accordion.Header>
          <Accordion.Body>
            <p>Otrzymywany jest z ropy naftowej, przez co budzi nieustannie kontrowersje</p>
            <p>Opinia eksperta (dr inż. Magdalena Sikora - Adiunkt w Instytucie Surowców Naturalnych i Kosmetyków na
              Wydziale
              Biotechnologii i Nauk o Żywności Politechniki Łódzkiej, współautorka wielu artykułów w czasopismach
              zagranicznych oraz kilkudziesięciu patentów i zgłoszeń patentowych, w tym także z zakresu surowców i
              preparatów
              kosmetycznych; Członek rady programowej „Świata Przemysłu Kosmetycznego” oraz recenzent „Polish Journal of
              Cosmetology”): Glikole są to związki zaliczane do grupy tzw. humektantów, czyli komponentów
              higroskopijnych,
              zdolnych do trwałego absorbowania i zatrzymywania wody z otoczenia. Surowce te odgrywają ważną rolę w
              kosmetykach jako środki nawilżające skórę. Chętnie stosuje się je jednak również w celu poprawienia
              właściwości
              użytkowych samych preparatów kosmetycznych. Substancje te zapewniają bowiem odpowiednie zabezpieczenie
              wyrobu
              przed wysychaniem, a także stabilizują go. Najbardziej popularnym surowcem zaliczanym do tej grupy jest
              glikol
              propylenowy (Propylene Glycol). Przy zawartości kilku procent tworzy on na skórze wilgotny, nie
              wysychający
              film, obniżający współczynnik TEWL (Trans Epidermal Water Loss) czyli poprzez-naskórkowy ubytek wody.
              Związek
              ten ułatwia wnikanie wielu substancji aktywnych w głąb skóry, zwiększając ich efektywność. Działa on także
              synergicznie ze środkami konserwującymi, dzięki czemu można ograniczyć ich zawartość w recepturze
              kosmetycznej.
              W stężeniu powyżej 20% sam może pełnić funkcję środka zabezpieczającego czystość mikrobiologiczną
              kosmetyku.
              Glikol propylenowy w kosmetykach wykorzystywany jest zarówno w postaci samoistnego składnika, jak również
              jako
              rozpuszczalnik powszechnie używanych ekstraktów roślinnych. Jest to surowiec stosowany od ponad 50 lat,
              charakteryzujący się niskim profilem toksyczności, dobrze tolerowanym przez użytkowników, praktycznie nie
              powodującym podrażnień, ani uczuleń. Bezpieczeństwo stosowania glikolu propylenowego jednoznacznie zostało
              potwierdzone przez m in. panel ekspertów CIR. Coraz częściej w kosmetykach wykorzystywane są także inne
              związki
              charakteryzujące się podobnym do niego działaniem np. glikol butylenowy (Butylene Glycol), czy pentylenowy
              (Pentylene Glycol). Polecam</p>
            <p>Opinia eksperta (Marta Majszyk-Świątek - Safety Assessor, Kosmetolog, Technolog w firmie kosmetycznej
              oraz
              doktorantka): Te dwa surowce są bardzo powszechnie i chętnie stosowane podczas produkcji kosmetyków ze
              względu
              na ich szerokie zastosowanie. Poprawiają one reologię masy, ułatwiają przenikanie składników aktywnych
              oraz
              odpowiadają za nawilżenie skóry. W Rozporządzeniu 1223/2009 nie ma żadnych ograniczeń dla tych
              surowców.</p>
            <a href={"https://lupakosmetyczna.pl/skladniki-kosmetykow/propylene-glycol"}>Źródło</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
    </section>
  )
};


export default Page;