import Wstep from "./Wstep";
import Gliceryna from "./Gliceryna";
import Izomerat from "./IzomeratSacharydowy";
import Peg12 from "./Peg12Dimethicone";
import SodiumHyaluronate from "./SodiumHyaluronate";
import HyaluronicAcid from "./HyaluronicAcid";
import MethylGluceth from "./MethylGluceth20";
import GlikolPropylenowy from "./GlikolPropylenowy";
import Phenoxyethanol from "./Phenoxyethanol";
import SodiumPCA from "./SodiumPCA";

export const PAGES = [
  [
    {title: "Wstęp", component: Wstep, id: "wstep"},
  ],
  [
    {title: "Gliceryna", component: Gliceryna, id: "gliceryna"},
    {title: "Izomerat Sacharydowy, Pentawityna", component: Izomerat, id: "izomerat"},
    {title: "PEG-12 Dimethicone", component: Peg12, id: "peg12"},
  ],
  [
    {title: "Sodium Hyaluronate", component: SodiumHyaluronate, id: "sodiumHyaluronate"},
    {title: "Hyaluronic Acid", component: HyaluronicAcid, id: "hyaluronicAcid"},
    {title: "Methyl Gluceth-20", component: MethylGluceth, id: "methylGluceth"},
  ],
  [
    {title: "Glikol propylenowy", component: GlikolPropylenowy, id: "glikolPropylenowy"},
    {title: "Phenoxyethanol", component: Phenoxyethanol, id: "phenoxyethanol"},
    {title: "Sodium PCA", component: SodiumPCA, id: "sodiumPca"},
  ],
];