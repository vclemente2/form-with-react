import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import StyledForm from "../StyledForm";
import ValidacoesCadastro from "../../contexts/ValidacoesFormulario";

export default function DadosUsuario({ aoEnviar }) {
  const [dataForm, setDataForm] = useState({
    email: "",
    senha: ""
  });

  const [errors, setErrors] = useState({
    email: {
      error: false,
      errorMessage: ""
    },
    senha: {
      error: false,
      errorMessage: ""
    }
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const VerifyError = useContext(ValidacoesCadastro);

  useEffect(() => {
    if (
      dataForm.email.match(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      ) &&
      dataForm.senha.length >= 4
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
        id="email"
        label="email"
        type="email"
        required
        fullWidth
        error={errors.email.error}
        helperText={errors.email.errorMessage}
        value={dataForm.email}
        onChange={aoAtualizar}
        onBlur={validarCampos}
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        fullWidth
        error={errors.senha.error}
        helperText={errors.senha.errorMessage}
        value={dataForm.senha}
        onChange={aoAtualizar}
        onBlur={validarCampos}
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
    setDataForm({ ...dataForm, [element.id]: element.value });
  }

  function validarCampos(event) {
    const error = VerifyError.DadosUsuario(event);
    setErrors({ ...errors, ...error });
  }

  function verificarErroFormulario() {
    for (const attribute in errors) {
      if (errors[attribute].error) return true;
      return false;
    }
  }
}
