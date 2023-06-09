export default class VerifyError {
  static DadosUsuario(event) {
    const element = event.target;

    if (element.id === "email") {
      if (!element.value) {
        return {
          [element.id]: {
            error: true,
            errorMessage: "O email é obrigatório."
          }
        };
      } else if (
        !element.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
      ) {
        return {
          [element.id]: {
            error: true,
            errorMessage: "Favor preencher com um formato de e-mail válido."
          }
        };
      } else {
        return {
          [element.id]: { error: false, errorMessage: "" }
        };
      }
    }

    if (element.id === "senha") {
      if (!element.value) {
        return {
          [element.id]: {
            error: true,
            errorMessage: "A senha é obrigatório."
          }
        };
      } else if (element.value.length <= 3) {
        return {
          [element.id]: {
            error: true,
            errorMessage: "A senha deve contrer pelo menos 4 caracteres."
          }
        };
      } else {
        return {
          [element.id]: { error: false, errorMessage: "" }
        };
      }
    }
  }

  static DadosPessoais(event) {
    const element = event.target;

    if (element.id === "nome") {
      if (!element.value) {
        return {
          nome: { error: true, errorMessage: "O nome é obrigatório." }
        };
      } else if (
        !element.value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/)
      ) {
        return {
          nome: {
            error: true,
            errorMessage:
              "O nome não pode conter números ou caracteres especiais."
          }
        };
      } else {
        return {
          nome: { error: false, errorMessage: "" }
        };
      }
    }

    if (element.id === "sobrenome") {
      if (
        !element.value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/) &&
        element.value !== ""
      ) {
        return {
          sobrenome: {
            error: true,
            errorMessage:
              "O sobrenome não pode conter números ou caracteres especiais."
          }
        };
      } else {
        return {
          sobrenome: { error: false, errorMessage: "" }
        };
      }
    }

    if (element.id === "cpf") {
      if (!element.value) {
        return {
          cpf: { error: true, errorMessage: "O cpf é obrigatório." }
        };
      } else if (!element.value.match(/^[1-9.-]+$/)) {
        return {
          cpf: {
            error: true,
            errorMessage:
              "O cpf não pode conter letras ou caracteres especiais."
          }
        };
      } else if (
        element.value.replaceAll("-", "").replaceAll(".", "").length !== 11
      ) {
        return {
          cpf: {
            error: true,
            errorMessage: "O cpf deve conter 11 números."
          }
        };
      } else {
        return {
          cpf: { error: false, errorMessage: "" }
        };
      }
    }
  }

  static DadosEntrega(error) {
    if (error) {
      return { error: true, messageError: "Cep não localizado." };
    } else {
      return { error: false, messageError: "" };
    }
  }
}
