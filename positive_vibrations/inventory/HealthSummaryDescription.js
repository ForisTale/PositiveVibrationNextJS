import CardImage01 from "../inventory/images/card_test_01.jpg";
import CardImage02 from "../inventory/images/card_test_02.jpg";
import {URLS} from "./URLS";

const SUMMARY = [
  {
    title: "MASKA HIALURONOWA",
    description: "Inspirowany azjatyckim rytuałem pielęgnacyjnym, unikalny rytuał trzech kroków Skinonly " +
              "Routine: detoks, nawilżenie, odmłodzenie, został stworzony dla osiągnięcia najlepszych efektów, " +
              "które gwarantują młodzieńczy wygląd i głębokie nawilżenie.",
    image: CardImage01,
    url: URLS.health + "/hyaluronic-mask",
    isVideo: false,
  },
  {
    title: "SERUM WYSZCZUPLAJĄCE",
    description: "Serum codziennie pracuje nad jędrnością i gładkością Twojego ciała, a przede wszystkim ud" +
              " i pośladków. Dzięki niemu walka z cellulitem staje się łatwiejsza i skuteczniejsza. Preparat pobudza" +
              " proces lipolizy, która rozkłada tłuszcz w komórkach oraz pobudza mikrokrążenie, aby zwiększyć drenaż" +
              " tkanek i usunąć nagromadzone toksyny.",
    image: CardImage02,
    url: "/",
    isVideo: false,
  },
  {
    title: "SERUM WYSZCZUPLAJĄCE",
    description: "Serum codziennie pracuje nad jędrnością i gładkością Twojego ciała, a przede wszystkim ud" +
              " i pośladków. Dzięki niemu walka z cellulitem staje się łatwiejsza i skuteczniejsza. Preparat pobudza" +
              " proces lipolizy, która rozkłada tłuszcz w komórkach oraz pobudza mikrokrążenie, aby zwiększyć drenaż" +
              " tkanek i usunąć nagromadzone toksyny.",
    image: CardImage02,
    url: "/",
    isVideo: true,
  },
];

export default SUMMARY;