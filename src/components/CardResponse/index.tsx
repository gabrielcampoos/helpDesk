import { Box } from "@mui/material";
import { copy } from "clipboard-js";
import { useForm } from "react-hook-form";
import { ButtonCopy } from "../ButtonCopy";
import CardStyled from "./styles";

type Response = {
  encerrar: string;
};

const CardResponse = () => {
  const { register, getValues } = useForm<Response>();

  return (
    <CardStyled
      style={{ cursor: "pointer" }}
      onClick={() => {
        const values = getValues(["encerrar"]);
        const mapText = values.join("\n");
        copy(mapText);
      }}
    >
      <form style={{ width: "100%", height: "135px" }}>
        <Box>
          <textarea
            readOnly
            {...register("encerrar")}
            value="Seu atendimento será encerrado por falta de comunicação.
Nosso suporte está disponível: 
Segunda a sexta-feira das 08:00  às 21:00 horas.
Aos sábados das 08:00 às 17:00 horas.
Tenha um excelente dia !"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              width: "100%",
              height: "135px",
              resize: "none",
              overflow: "hidden",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
        </Box>
      </form>

      <ButtonCopy
        onClick={() => {
          const values = getValues(["encerrar"]);
          const mapText = values.join("\n");
          copy(mapText);
        }}
      />
    </CardStyled>
  );
};

export default CardResponse;
