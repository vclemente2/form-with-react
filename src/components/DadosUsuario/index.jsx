import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StyledForm from "../StyledForm";

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
        onBlur={verifyError}
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
        onBlur={verifyError}
      />
      <span>
        <Button variant="contained" type="submit">
          Próximo
        </Button>
      </span>
    </StyledForm>
  );

  function aoAtualizar(event) {
    const element = event.target;
    setDataForm({ ...dataForm, [element.id]: element.value });
  }

  function verifyError(event) {
    const element = event.target;

    if (element.id === "email") {
      if (!element.value) {
        setErrors({
          ...errors,
          [element.id]: {
            error: true,
            errorMessage: "O email é obrigatório."
          }
        });
      } else if (
        !element.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
      ) {
        setErrors({
          ...errors,
          [element.id]: {
            error: true,
            errorMessage: "Favor preencher com um formato de e-mail válido."
          }
        });
      } else {
        setErrors({
          ...errors,
          [element.id]: { error: false, errorMessage: "" }
        });
      }
    }

    if (element.id === "senha") {
      if (!element.value) {
        setErrors({
          ...errors,
          [element.id]: {
            error: true,
            errorMessage: "A senha é obrigatório."
          }
        });
      } else if (element.value.length <= 3) {
        setErrors({
          ...errors,
          [element.id]: {
            error: true,
            errorMessage: "A senha deve contrer pelo menos 4 caracteres."
          }
        });
      } else {
        setErrors({
          ...errors,
          [element.id]: { error: false, errorMessage: "" }
        });
      }
    }
  }
}
