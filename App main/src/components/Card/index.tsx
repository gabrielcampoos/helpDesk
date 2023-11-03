import { Typography } from "@mui/material";
import { copy } from "clipboard-js";
import listaRecados from "../../database";
import { Recado } from "../../types";
import { ButtonCopy } from "../ButtonCopy";
import CardStyled from "./styles";

const Card: React.FC<Recado> = ({
  a_id,
  b_dados,
  c_endereco,
  d_telefone,
  e_motivoContato,
  f_luzes,
  g_procedimento,
  h_obs,
}) => {
  // const handleCopyText = () => {
  //   const getText = document.getElementById("textId");
  //   setCopyText(getText);
  // };

  const copyToClipboard = () => {
    const listaCopy = listaRecados.map((l) => l);

    console.log(JSON.stringify(listaCopy));

    const values = Object.values(listaCopy);

    copy(JSON.stringify(values, null, 2));
  };

  return (
    <CardStyled>
      <Typography>{b_dados}</Typography>
      <Typography>{c_endereco}</Typography>
      <Typography>{d_telefone}</Typography>
      <Typography>{e_motivoContato}</Typography>
      <Typography>{f_luzes}</Typography>
      <Typography>{g_procedimento}</Typography>
      <Typography>{h_obs}</Typography>

      <ButtonCopy onClick={copyToClipboard} />
    </CardStyled>
  );
};

export default Card;
