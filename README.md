# Implementação de Formulários com React

Este projeto acadêmico tem como objetivo demonstrar a implementação de formulários utilizando o React, abrangendo técnicas de validação, apresentação de erros e preenchimento automático de campos de endereço com base em um CEP fornecido pelo usuário.

## Funcionalidades

- Criação de formulários com campos para entrada de dados.
- Validação dos campos do formulário antes do envio.
- Apresentação de erros ao usuário em caso de campos inválidos.
- Uso da Fetch API para validar um CEP e preencher automaticamente os campos de endereço.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para criação de interfaces de usuário.
- Hooks useState e useEffect: Utilizados para gerenciar o estado do formulário e realizar efeitos colaterais.
- Fetch API: Utilizada para fazer requisições HTTP e validar o CEP fornecido pelo usuário.
- Styled-components: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- JavaScript: Linguagem de programação utilizada para a lógica do projeto.

## Instalação

Para iniciar a aplicação, siga as instruções abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download do Node.js em https://nodejs.org/.
2. Clone o repositório do projeto para o seu computador.
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar a aplicação.
6. Acesse a aplicação no navegador, através do endereço `http://localhost:5173`.

## Uso da Aplicação

1. Ao acessar a aplicação, você será apresentado a uma sequência de formulários.
2. Preencha os campos do formulário de acordo com as instruções fornecidas.
3. Os campos serão validados conforme as regras especificadas.
4. Caso algum campo esteja inválido, uma mensagem de erro será exibida ao usuário.
5. No campo de CEP, ao digitar um valor válido, a aplicação realizará uma consulta à API externa para validar o CEP e preencher os campos de endereço automaticamente.
6. Após preencher todos os campos corretamente, você pode prosseguir para o próximo formulário da sequência.
7. Ao final da sequência de formulários, você será redirecionado para uma página de confirmação ou uma ação adicional será executada, dependendo da lógica de negócio implementada.
