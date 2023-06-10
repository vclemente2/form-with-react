import { Container, Step, StepLabel, Stepper, Typography } from "@mui/material";
import DadosEntrega from "../DadosEntrega";
import DadosPessoais from "../DadosPessoais";
import DadosUsuario from "../DadosUsuario";
import { useContext, useEffect, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesFormulario";

export default function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      onSubmit(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletaDados} />,
    <DadosPessoais aoEnviar={coletaDados} />,
    <DadosEntrega aoEnviar={coletaDados} dadosColetados={dadosColetados} />,
    <Typography variant="h5" align="center" padding="2rem">
      Cadastro concluído com sucesso!
    </Typography>
  ];

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </Container>
  );

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletaDados(data) {
    setDadosColetados({ ...dadosColetados, ...data });
    proximaEtapa();
  }
}
