import { v4 as gerarId } from "uuid";
import { Recado } from "../types";

const listaRecados: Recado[] = [
  {
    a_id: gerarId(),
    b_dados: "Dados confirmados",
    c_endereco: "Endereço: ",
    d_telefone: "Telefone: ",
    e_motivoContato: "Entrou em contato informando que está: ",
    f_luzes: "Luzes do equipamento: ",
    g_procedimento: "Procedimentos feitos: ",
    h_obs: "OBS: Ligar antes de ir",
  },
];

// Dados confirmados
// Endereço:
// Telefone:
// Entrou em contato informando que está:
// Luzes do equipamento:
// Procedimentos feitos:
// OBS: Ligar antes de ir

export default listaRecados;
