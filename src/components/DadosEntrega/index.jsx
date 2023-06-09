import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import StyledForm from "../StyledForm";

export default function DadosEntrega({
  aoEnviar,
  dadosColetados,
  VerifyError
}) {
  const [dataForm, setDataForm] = useState({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: ""
  });

  const [errors, setErrors] = useState({
    error: false,
    messageError: ""
  });

  useEffect(() => {
    buscarEnderecoPeloCep(dataForm.cep);
  }, [dataForm.cep]);

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        if (formValidado()) aoEnviar({ ...dataForm, ...dadosColetados });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        required
        fullWidth
        error={errors.error}
        helperText={errors.messageError}
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
      <TextField
        id="estado"
        label="Estado"
        required
        fullWidth
        error={false}
        helperText=""
        value={dataForm.estado}
        onChange={aoAtualizar}
      />
      <span>
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </span>
    </StyledForm>
  );

  async function aoAtualizar(event) {
    const element = event.target;
    setDataForm({ ...dataForm, [element.id]: element.value });
  }

  async function buscarEnderecoPeloCep(cep) {
    const cepNumber = cep.replaceAll("-", "").replaceAll(".", "");
    if (cepNumber.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.logradouro) throw new Error("CEP Não localizado");

        setDataForm({
          ...dataForm,
          endereco: data.logradouro,
          cidade: data.localidade,
          estado: data.uf
        });

        setErrors(VerifyError.DadosEntrega());
      } catch (error) {
        setDataForm({
          ...dataForm,
          endereco: "",
          cidade: "",
          estado: ""
        });

        setErrors(VerifyError.DadosEntrega(error));
      }
    }
  }

  function formValidado() {
    if (errors.error) return false;
    return true;
  }
}
