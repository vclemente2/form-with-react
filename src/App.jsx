import { Typography } from "@mui/material";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
  function printData(data) {
    console.log(data);
  }

  return (
    <>
      <Typography variant="h3" component="h1" align="center" padding="2rem">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro onSubmit={printData} />
    </>
  );
}

export default App;
