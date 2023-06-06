import DadosPessoais from "../DadosPessoais";
import DadosUsuario from "../DadosUsuario";

export default function FormularioCadastro({ onSubmit }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} />
      <DadosUsuario />
    </>
  );
}
