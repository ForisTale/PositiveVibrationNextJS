import Chapter00 from "./Wstep";
import Chapter01 from "./Gliceryna";
import Chapter02 from "./IzomeratSacharydowy";
import Chapter03 from "./Peg12Dimethicone";
import Chapter04 from "./SodiumHyaluronate";
import Chapter05 from "./HyaluronicAcid";
import Chapter06 from "./MethylGluceth20";
import Chapter07 from "./GlikolPropylenowy";
import Chapter08 from "./Phenoxyethanol";
import Chapter09 from "./SodiumPCA";

export const PAGES = [
  [
    {title: "Wstęp", component: Chapter00, id: "wstep"},
  ],
  [
    {title: "Gliceryna", component: Chapter01, id: "gliceryna"},
    {title: "Izomerat Sacharydowy, Pentawityna", component: Chapter02, id: "izomerat"},
    {title: "PEG-12 Dimethicone", component: Chapter03, id: "peg12"},
  ],
  [
    {title: "Sodium Hyaluronate", component: Chapter04, id: "sodiumHyaluronate"},
    {title: "Hyaluronic Acid", component: Chapter05, id: "hyaluronicAcid"},
    {title: "Methyl Gluceth-20", component: Chapter06, id: "methylGluceth"},
  ],
  [
    {title: "Glikol propylenowy", component: Chapter07, id: "glikolPropylenowy"},
    {title: "Phenoxyethanol", component: Chapter08, id: "phenoxyethanol"},
    {title: "Sodium PCA", component: Chapter09, id: "sodiumPca"},
  ],
];