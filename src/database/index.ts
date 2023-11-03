import { v4 as gerarId } from "uuid";
import { Recado } from "../types";

const listaRecados: Recado[] = [
  {
    id: gerarId(),
    cidade: "",
    bairro: "",
    descricao: "",
  },
];

export default listaRecados;
