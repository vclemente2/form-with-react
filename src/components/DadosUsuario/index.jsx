import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StyledForm from "../StyledForm";

export default function DadosUsuario({ aoEnviar, VerifyError }) {
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
        onBlur={checkErrors}
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
        onBlur={checkErrors}
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

  function checkErrors(event) {
    const error = VerifyError.DadosUsuario(event);
    setErrors({ ...errors, ...error });
  }
}
