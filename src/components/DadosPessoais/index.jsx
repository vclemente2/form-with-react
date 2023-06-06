import styled from "styled-components";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

const DadosPessoais = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  min-width: fit-content;
  padding: 1rem 2rem;
  width: 50vw;

  & span {
    margin: auto;
  }
`;

export default function (props) {
  const [dataForm, setDataForm] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    promocoes: true,
    novidades: true
  });

  const [errors, setErrors] = useState({
    nome: {
      error: false,
      errorMessage: ""
    },
    sobrenome: {
      error: false,
      errorMessage: ""
    },
    cpf: {
      error: false,
      errorMessage: ""
    }
  });

  function updateData(event) {
    const element = event.target.id;
    const value =
      element === "promocoes" || element === "novidades"
        ? event.target.checked
        : event.target.value;

    setDataForm({ ...dataForm, [element]: value });
  }

  function sendData(event) {
    event.preventDefault();
    props.onSubmit(dataForm);
  }

  function verifyError(event) {
    const element = event.target;

    if (element.id === "nome") {
      if (!element.value) {
        setErrors({
          ...errors,
          nome: { error: true, errorMessage: "O nome é obrigatório." }
        });
      } else if (
        !element.value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/)
      ) {
        setErrors({
          ...errors,
          nome: {
            error: true,
            errorMessage:
              "O nome não pode conter números ou caracteres especiais."
          }
        });
      } else {
        setErrors({
          ...errors,
          nome: { error: false, errorMessage: "" }
        });
      }
    }

    if (element.id === "sobrenome") {
      if (
        !element.value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/) &&
        element.value !== ""
      ) {
        setErrors({
          ...errors,
          sobrenome: {
            error: true,
            errorMessage:
              "O sobrenome não pode conter números ou caracteres especiais."
          }
        });
      } else {
        setErrors({
          ...errors,
          sobrenome: { error: false, errorMessage: "" }
        });
      }
    }

    if (element.id === "cpf") {
      if (!element.value) {
        setErrors({
          ...errors,
          cpf: { error: true, errorMessage: "O cpf é obrigatório." }
        });
      } else if (!element.value.match(/^[1-9.-]+$/)) {
        setErrors({
          ...errors,
          cpf: {
            error: true,
            errorMessage:
              "O cpf não pode conter letras ou caracteres especiais."
          }
        });
      } else if (
        element.value.replaceAll("-", "").replaceAll(".", "").length !== 11
      ) {
        setErrors({
          ...errors,
          cpf: {
            error: true,
            errorMessage: "O cpf deve conter 11 números."
          }
        });
      } else {
        setErrors({
          ...errors,
          cpf: { error: false, errorMessage: "" }
        });
      }
    }
  }

  return (
    <DadosPessoais onSubmit={sendData}>
      <TextField
        id="nome"
        label="Nome"
        value={dataForm.nome}
        onChange={updateData}
        required
        fullWidth
        error={errors.nome.error}
        helperText={errors.nome.errorMessage}
        onBlur={verifyError}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={dataForm.sobrenome}
        onChange={updateData}
        fullWidth
        error={errors.sobrenome.error}
        helperText={errors.sobrenome.errorMessage}
        onBlur={verifyError}
      />

      <TextField
        id="cpf"
        label="CPF"
        value={dataForm.cpf}
        onChange={updateData}
        required
        fullWidth
        error={errors.cpf.error}
        helperText={errors.cpf.errorMessage}
        onBlur={verifyError}
      />

      <FormControlLabel
        control={
          <Switch
            onChange={updateData}
            checked={dataForm.promocoes}
            id="promocoes"
          />
        }
        label="Receber Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={updateData}
            checked={dataForm.novidades}
            id="novidades"
          />
        }
        label="Receber Novidades"
      />
      <span>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </span>
    </DadosPessoais>
  );
}
