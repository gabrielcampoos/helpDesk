import React, { useEffect, useMemo, useState } from "react";

import { Box, Typography } from "@mui/material";
import ButtonStyled from "../../components/Button/styles";
import Card from "../../components/Card";
import CardResponse from "../../components/CardResponse";
import Container from "../../components/Container/styles";
import FloatAddButton from "../../components/FloatAddButton";
import TitleDefault from "../../components/Heading";
import { Recado } from "../../types";
import { gerarId } from "../../utils/geradorData";

const Home: React.FC<Recado> = ({ id, cidade, bairro, descricao }) => {
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

  const TitleMemo = useMemo(() => {
    return <TitleDefault title="Helpdesk" />;
  }, []);

  // 1 - se uma função não precisa de parametros, dai chama no evento sem a necessidade da arrow function e abre e fecha parenteses da função

  // 2- Sempre que tiver parametros a rotina/função a gente monta uma () => que aponta para execução desta rotina
  const addNewCard = () => {
    const novoRecado: Recado = {
      id: gerarId(),
      cidade,
      bairro,
      descricao,
    };

    setListaRecados((prevState) => [novoRecado, ...prevState]);
  };

  const handleReset = () => {
    setListaRecados([]);
  };

  function del() {
    console.log("oi");
  }

  return (
    <>
      <Container display="flex" alignItems="center" flexDirection="column">
        {TitleMemo}

        <Box width="100%" padding="0 50px">
          <Typography component={"h1"} variant={"h5"}>
            Utils...
          </Typography>
        </Box>

        <Box
          width={"100%"}
          height={"300px"}
          display={"flex"}
          padding={"40px"}
          gap={2}
        >
          <Card />
          <CardResponse />
        </Box>

        <Box width="100%" display="flex" alignItems="center" padding="0 40px">
          <Typography component={"h1"} variant={"h5"}>
            Avisos...
          </Typography>
        </Box>
        {/* <ButtonStyled onClick={addNewCard}>Adicionar</ButtonStyled> */}
        {/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros) OK
				2 - Criar componente do Card - OK
				3 - Renderizar um Card para cada tarefa da lista - OK
				4 - Criar o Componente Button do App - OK

			*/}
        {listaRecados.map(({ id, cidade, bairro, descricao }) => {
          return <Card key={id} onClick={() => del()} />;
        })}
        {/* <FloatAddButton /> */}
      </Container>
      <ButtonStyled onClick={addNewCard}>
        <FloatAddButton />
      </ButtonStyled>
    </>
  );
};

export default Home;

// main > App > AppRoutes > Home
