import CardStyled from "./styles";

type ICardRecado = {
  id: string;
  cidade: string;
  bairro: string;
  descricao: string;
};

const CardRecado: React.FC<ICardRecado> = ({id, cidade, bairro, descricao}) => {
  return (
  <CardStyled>
    <Box>
        
    </Box>
  </CardStyled>
  )
};

export default CardRecado;
