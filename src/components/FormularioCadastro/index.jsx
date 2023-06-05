import styled from "styled-components";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

const FormularioCadastro = styled.form`
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

  return (
    <FormularioCadastro onSubmit={sendData}>
      <TextField
        id="nome"
        label="Nome"
        value={dataForm.nome}
        onChange={updateData}
        required
        fullWidth
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={dataForm.sobrenome}
        onChange={updateData}
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        value={dataForm.cpf}
        onChange={updateData}
        required
        fullWidth
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
    </FormularioCadastro>
  );
}
