import classes from "./SodiumPCA.module.css";

const Page = () => {
  return (
    <section id={"sodiumPca"}>
      <h2>Sodium PCA</h2>
      <p>Sodium PCA to substancja hydrofilowa, bardzo dobrze rozpuszczalna w wodzie.</p>
      <div className={classes.list}>
        <h5>Jak działa:</h5>
        <ul>
          <li>Silnie nawilża.</li>
          <li>Ogranicza TEWL ([transepidermal water loss] – przeznaskórkowa utrata wody PIE. O zjawisku tym mówimy
            wówczas
            gdy zostaje zaburzony prawidłowy poziom nawilżenia skóry uwarunkowany równowagą między dyfuzją a
            wyparowaniem,
            wartością przepływu oraz zdolnością do zatrzymywania wody w warstwie rogowej naskórka.)
          </li>
          <li>Zmiękcza, wygładza warstwę rogową i naskórek.</li>
          <li>Łatwo penetruje w głąb naskórka bez wywoływania podrażnień</li>
          <li>Zapobiega elektryzowaniu się włosów.</li>
        </ul>
        <h5>Funkcja w produkcie:</h5>
        <ul>
          <li>Humektant – zapobiega wysychaniu kosmetyku. W przypadku kosmetyków w formie płynnej zapobiega
            krystalizacji przy ujściu z butelki.
          </li>
        </ul>
        <h5>Działanie kosmetyczne:</h5>
        <ul>
          <li>Substancja filmotwórcza, hydrofilowa, rozpuszczalna w wodzie.</li>
          <li>Jest odpowiedzialna za utrzymywanie wody w naskórku (ogranicza transepidermalną utratę wody TEWL), dzięki
            czemu go nawilża, a także zmiękcza i wygładza skórę.
          </li>
          <li>Sodium PCA ma zastosowanie również w kosmetykach do włosów jako substancja antystatyczna, zapobiegająca
            elektryzowaniu się włosów.
          </li>
        </ul>
        <h5>Bezpieczeństwo:</h5>
        <ul>
          <li>Sodium PCA jest bezpieczny do stosowania w kosmetykach.</li>
          <li>Cosmetic Ingredient Review: Panel ekspertów CIR dokonał oceny bezpieczeństwa składnika Sodium PCA i PCA.
            Eksperci wskazali, że Sodium PCA może być bezpiecznie stosowany w produktach kosmetycznych.
          </li>
          <li>Nie znaleziono dowodów na fototoksyczność, uczulenie ani komedogenność składnika.</li>
          <li>Sodium PCA nie był genotoksyczny.</li>
          <li>W szeregu testów klinicznych stwierdzono, że Sodium PCA nie powoduje podrażnień i nie uczulaja (z i bez
            narażenia na promieniowanie UV).
          </li>
          <li>Alergiczność – brak alergiczności</li>
          <li>Pochodzenie roślinne, syntetyczne.</li>
        </ul>
      </div>
      <br/>
    </section>
  )
};


export default Page;