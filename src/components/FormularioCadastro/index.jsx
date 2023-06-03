import styled from "styled-components";
import { Button, TextField } from "@mui/material";

const FormularioCadastro = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: fit-content;

  & label {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  & label.text {
    flex-direction: column;
  }
`;

export default function () {
  return (
    <FormularioCadastro>
      <TextField id="nome" label="Nome" />

      <TextField id="sobrenome" label="Sobrenome" />

      <TextField id="cpf" label="CPF" />

      <label htmlFor="promocoes">
        <input type="checkbox" id="promocoes" />
        Receber Promoções
      </label>

      <label htmlFor="novidades">
        <input type="checkbox" id="novidades" />
        Receber Novidades
      </label>

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </FormularioCadastro>
  );
}
