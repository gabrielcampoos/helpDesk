import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../../pages/Cadastro";
import Home from "../../pages/Home/index";
import Login from "../../pages/Login";
import { gerarId } from "../../utils/geradorData";

// function AppRoutes() {
//     return (

//     )
// }

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              id={gerarId()}
              dados="Dados confirmados: "
              endereco="Endereço: "
              telefone="Telefone: "
              motivoContato="Entrou em contato informando que está: "
              luzes="Luzes do equipamento: "
              procedimento="Procedimentos feitos: "
              obs="OBS: Ligar antes de ir"
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

// deve iniciar com a primeira letra maiuscula
