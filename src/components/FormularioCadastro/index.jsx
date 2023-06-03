import styled from "styled-components";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";

const FormularioCadastro = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: fit-content;
  margin: auto;

  & span {
    margin: auto;
  }
`;

export default function () {
  return (
    <FormularioCadastro>
      <TextField id="nome" label="Nome" fullWidth />

      <TextField id="sobrenome" label="Sobrenome" fullWidth />

      <TextField id="cpf" label="CPF" />

      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Receber Promoções"
      />

      <FormControlLabel
        control={<Switch defaultChecked />}
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
