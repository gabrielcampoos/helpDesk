export interface Recado {
  id: string;
  cidade: string;
  bairro: string;
  descricao: string;
  onClick?: () => void;
}
