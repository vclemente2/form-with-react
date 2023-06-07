import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StyledForm from "../StyledForm";

export default function DadosUsuario({ aoEnviar }) {
  const [dataForm, setDataForm] = useState({
    email: "",
    senha: ""
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
        error={false}
        helperText=""
        value={dataForm.email}
        onChange={aoAtualizar}
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.senha}
        onChange={aoAtualizar}
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
}
