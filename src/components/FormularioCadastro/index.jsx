import DadosEntrega from "../DadosEntrega";
import DadosPessoais from "../DadosPessoais";
import DadosUsuario from "../DadosUsuario";
import { useState } from "react";

export default function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa} />,
    <DadosPessoais aoEnviar={proximaEtapa} />,
    <DadosEntrega onSubmit={onSubmit} />
  ];

  function proximaEtapa(data) {
    console.log(data);
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}
