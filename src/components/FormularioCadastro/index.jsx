import styled from "styled-components";

const FormularioCadastro = styled.form`
  align-items: flex-start;
  background: lightgrey;
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
      <label for="nome" className="text">
        Nome
        <input type="text" id="nome" />
      </label>

      <label for="sobrenome" className="text">
        Sobrenome
        <input type="text" id="sobrenome" />
      </label>

      <label for="cpf" className="text">
        CPF
        <input type="text" id="cpf" />
      </label>

      <label for="promocoes">
        <input type="checkbox" id="promocoes" />
        Receber Promoções
      </label>

      <label for="novidades">
        <input type="checkbox" id="novidades" />
        Receber Novidades
      </label>

      <input type="submit" value="Cadastrar" />
    </FormularioCadastro>
  );
}
