import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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

  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (
      dataForm.nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/) &&
      dataForm.cpf.match(/^[1-9.-]+$/) &&
      dataForm.cpf.length === 11
    ) {
      setSubmitDisabled(verificarErroFormulario());
    } else {
      setSubmitDisabled(true);
    }
  });

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar(dataForm);
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        value={dataForm.nome}
        onChange={aoAtualizar}
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
        onChange={aoAtualizar}
        fullWidth
        error={errors.sobrenome.error}
        helperText={errors.sobrenome.errorMessage}
        onBlur={validarCampos}
      />

      <TextField
        id="cpf"
        label="CPF"
        value={dataForm.cpf}
        onChange={aoAtualizar}
        required
        fullWidth
        error={errors.cpf.error}
        helperText={errors.cpf.errorMessage}
        onBlur={validarCampos}
      />

      <FormControlLabel
        control={
          <Switch
            onChange={aoAtualizar}
            checked={dataForm.promocoes}
            id="promocoes"
          />
        }
        label="Receber Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={aoAtualizar}
            checked={dataForm.novidades}
            id="novidades"
          />
        }
        label="Receber Novidades"
      />
      <span>
        <Button variant="contained" type="submit" disabled={submitDisabled}>
          Próximo
        </Button>
      </span>
    </StyledForm>
  );

  function aoAtualizar(event) {
    const element = event.target;
    if (element.id === "cpf")
      element.value = element.value.trim().replace(".", "").replace("-", "");

    const value =
      element.id === "promocoes" || element.id === "novidades"
        ? element.checked
        : element.value;

    setDataForm({ ...dataForm, [element.id]: value });
  }

  function validarCampos(event) {
    const error = VerifyError.DadosPessoais(event);
    setErrors({ ...errors, ...error });
  }

  function verificarErroFormulario() {
    for (const atribute in errors) {
      if (errors[atribute].error) return true;
      return false;
    }
  }
}
