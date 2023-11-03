import { Box } from "@mui/material";
import { copy } from "clipboard-js";
import { useForm } from "react-hook-form";
import { ButtonCopy } from "../ButtonCopy";
import CardStyled from "./styles";

type FormInputs = {
  dados: string;
  endereco: string;
  telefone: string;
  motivoContato: string;
  luzes: string;
  procedimento: string;
  obs: string;
};

const Card = () => {
  const { register, getValues } = useForm<FormInputs>();

  return (
    <CardStyled
      style={{ cursor: "pointer" }}
      onClick={() => {
        const values = getValues([
          "dados",
          "endereco",
          "telefone",
          "motivoContato",
          "luzes",
          "procedimento",
          "obs",
        ]);
        const mapText = values.join("\n");
        copy(mapText);
      }}
    >
      <form style={{ width: "100%" }}>
        <Box>
          <input
            readOnly
            {...register("dados")}
            value="Dados confirmados "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("endereco")}
            value="Endereço: "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("telefone")}
            value="Telefone: "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("motivoContato")}
            value="Entrou em contato informando que está: "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("luzes")}
            value="Luzes do equipamento: "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("procedimento")}
            value="Procedimentos feitos: "
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <input
            readOnly
            {...register("obs")}
            value="OBS: Ligar antes de ir"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
              fontFamily: "Arial",
              outline: "none",
              cursor: "pointer",
            }}
          />
        </Box>
      </form>

      <ButtonCopy
        onClick={() => {
          const values = getValues([
            "dados",
            "endereco",
            "telefone",
            "motivoContato",
            "luzes",
            "procedimento",
            "obs",
          ]);
          const mapText = values.join("\n");
          copy(mapText);
        }}
      />
    </CardStyled>
  );
};

export default Card;
