import { useEffect, useMemo, useState } from "react";
import ButtonStyled from "../../components/Button/styles";

import { Box, Typography } from "@mui/material";
import Card from "../../components/Card";
import Container from "../../components/Container/styles";
import FloatAddButton from "../../components/FloatAddButton";
import TitleDefault from "../../components/Heading";
import { Recado } from "../../types";
import { gerarId } from "../../utils/geradorData";

const Home: React.FC = () => {
  const [listaRecados, setListaRecados] = useState<Recado[]>([]);

  useEffect(() => {
    setListaRecados(JSON.parse(localStorage.getItem("recados") ?? "[]"));
    console.log("Executou o render uma vez");

    // 3 - quando o componente desmonta
    return () => {
      localStorage.removeItem("usuarioLogado");
    };
  }, []);

  // 2 - quando o componente atualiza - re-renderizou

  useEffect(() => {
    localStorage.setItem("recados", JSON.stringify(listaRecados));
    console.log("Lista tarefas atualizou - componente renderizou novamente");
  }, [listaRecados]);

  // 4 - toda e qualquer alteração que tiver - SEMPRE

  useEffect(() => {
    console.log("SEM DEPENDENCIAS");
  });

  const titleMemo = useMemo(() => {
    return <TitleDefault title="Script" />;
  }, []);

  // 1 - se uma função não precisa de parametros, dai chama no evento sem a necessidade da arrow function e abre e fecha parenteses da função

  // 2- Sempre que tiver parametros a rotina/função a gente monta uma () => que aponta para execução desta rotina
  const addNewCard = () => {
    const novoRecado: Recado = {
      a_id: gerarId(),
      b_dados: "Dados confirmados",
      c_endereco: "Endereço: ",
      d_telefone: "Telefone: ",
      e_motivoContato: "Entrou em contato informando que está: ",
      f_luzes: "Luzes do equipamento: ",
      g_procedimento: "Procedimentos feitos: ",
      h_obs: "OBS: Ligar antes de ir",
    };

    //     Dados confirmados
    // Endereço:
    // Telefone:
    // Entrou em contato informando que está:
    // Luzes do equipamento:
    // Procedimentos feitos:
    // OBS: Ligar antes de ir

    setListaRecados((prevState) => [novoRecado, ...prevState]);
  };

  const handleReset = () => {
    setListaRecados([]);
  };

  function del() {
    console.log("oi");
  }

  return (
    <Container display="flex" alignItems="center" flexDirection="column">
      {titleMemo}

      <Box
        width={"100%"}
        height={"300px"}
        display={"flex"}
        flexDirection={"column"}
        padding={"40px"}
      >
        <Typography component={"h1"} variant={"h5"}>
          Utils...
        </Typography>

        {listaRecados.map(
          ({
            a_id,
            b_dados,
            c_endereco,
            d_telefone,
            e_motivoContato,
            f_luzes,
            g_procedimento,
            h_obs,
          }) => {
            return (
              <Card
                key={a_id}
                a_id={a_id}
                b_dados={b_dados}
                c_endereco={c_endereco}
                d_telefone={d_telefone}
                e_motivoContato={e_motivoContato}
                f_luzes={f_luzes}
                g_procedimento={g_procedimento}
                h_obs={h_obs}
              />
            );
          }
        )}
      </Box>

      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        width="50%"
      >
        <ButtonStyled onClick={addNewCard}>Adicionar</ButtonStyled>
        {/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros) OK
				2 - Criar componente do Card - OK
				3 - Renderizar um Card para cada tarefa da lista - OK
				4 - Criar o Componente Button do App - OK

			*/}
        {/* {listaTarefas.map(({ id, criadoEm, titulo, recado }) => {
          return (
            <Card
              key={id}
              id={id}
              titulo={titulo}
              recado={recado}
              criadoEm={criadoEm}
              onClick={() => del()}
            />
          );
        })} */}
        {/* <FloatAddButton /> */}
      </Container>
      <FloatAddButton />
    </Container>
  );
};

export default Home;

// main > App > AppRoutes > Home
