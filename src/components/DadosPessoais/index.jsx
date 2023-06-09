import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";
import StyledForm from "../StyledForm";

export default function DadosPessoais({ aoEnviar, VerifyError }) {
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

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        if (formValidado()) aoEnviar(dataForm);
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        value={dataForm.nome}
        onChange={updateData}
        required
        fullWidth
        error={errors.nome.error}
        helperText={errors.nome.errorMessage}
        onBlur={validarCampos}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={dataForm.sobrenome}
        onChange={updateData}
        fullWidth
        error={errors.sobrenome.error}
        helperText={errors.sobrenome.errorMessage}
        onBlur={validarCampos}
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
        onBlur={validarCampos}
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
          Próximo
        </Button>
      </span>
    </StyledForm>
  );

  function updateData(event) {
    const element = event.target.id;
    const value =
      element === "promocoes" || element === "novidades"
        ? event.target.checked
        : event.target.value;

    setDataForm({ ...dataForm, [element]: value });
  }

  function validarCampos(event) {
    const error = VerifyError.DadosPessoais(event);
    setErrors({ ...errors, ...error });
  }

  function formValidado() {
    for (const atribute in errors) {
      if (errors[atribute].error) return false;
    }
    return true;
  }
}
