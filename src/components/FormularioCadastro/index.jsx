import DadosEntrega from "../DadosEntrega";
import DadosPessoais from "../DadosPessoais";
import DadosUsuario from "../DadosUsuario";
import { useState } from "react";

export default function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const formularios = [
    <DadosUsuario aoEnviar={coletaDados} />,
    <DadosPessoais aoEnviar={coletaDados} />,
    <DadosEntrega aoEnviar={onSubmit} dadosColetados={dadosColetados} />
  ];

  return <>{formularios[etapaAtual]}</>;

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletaDados(data) {
    setDadosColetados({ ...dadosColetados, ...data });
    proximaEtapa();
  }
}
