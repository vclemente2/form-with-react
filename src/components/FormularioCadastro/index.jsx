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

export default function () {
  const [dataForm, setDataForm] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    promocoes: true,
    novidades: true
  });

  function atualizaDados(event) {
    const element = event.target.id;
    const value =
      element === "promocoes" || element === "novidades"
        ? event.target.checked
        : event.target.value;

    setDataForm({ ...dataForm, [element]: value });
  }

  function salvaDados(event) {
    event.preventDefault();
    console.log(dataForm);
  }

  return (
    <FormularioCadastro onSubmit={salvaDados}>
      <TextField
        id="nome"
        label="Nome"
        value={dataForm.nome}
        onChange={atualizaDados}
        required
        fullWidth
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={dataForm.sobrenome}
        onChange={atualizaDados}
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        value={dataForm.cpf}
        onChange={atualizaDados}
        required
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            onChange={atualizaDados}
            value={dataForm.promocoes}
            id="promocoes"
          />
        }
        label="Receber Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            onChange={atualizaDados}
            value={dataForm.novidades}
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
