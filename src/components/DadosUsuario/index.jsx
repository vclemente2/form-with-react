import { Button, TextField } from "@mui/material";
import StyledForm from "../StyledForm";

export default function () {
  return (
    <StyledForm>
      <TextField id="email" label="email" type="email" required fullWidth />
      <TextField id="senha" label="senha" type="password" required fullWidth />
      <span>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </span>
    </StyledForm>
  );
}
