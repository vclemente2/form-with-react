import { useState } from "react";
import StyledForm from "../StyledForm";
import { Button, TextField } from "@mui/material";

export default function DadosEntrega({ onSubmit }) {
  const [dataForm, setDataForm] = useState({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: ""
  });

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(dataForm);
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.cep}
        onChange={aoAtualizar}
      />
      <TextField
        id="endereco"
        label="Endereço"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.endereco}
        onChange={aoAtualizar}
      />
      <TextField
        id="numero"
        label="Numero"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.numero}
        onChange={aoAtualizar}
      />
      <TextField
        id="complemento"
        label="Complemento"
        fullWidth
        error={false}
        helperText=""
        value={dataForm.complemento}
        onChange={aoAtualizar}
      />
      <TextField
        id="cidade"
        label="Cidade"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.cidade}
        onChange={aoAtualizar}
      />
      <TextField id="estado" label="Estado" required fullWidth />
      <span>
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </span>
    </StyledForm>
  );

  function aoAtualizar(event) {
    const element = event.target;
    setDataForm({ ...dataForm, [element.id]: element.value });
  }
}
