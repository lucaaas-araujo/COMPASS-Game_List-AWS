<p align="center">
  <img src="https://img.icons8.com/fluency/48/node-js.png" width="50"/>
  <img src="https://img.icons8.com/color/48/typescript.png" width="50"/>
  <img src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" width="50"/>
  <img src="https://img.icons8.com/color/48/react-native.png" width="50"/>
</p>

<h1 align="center">Game List - Backend API</h1>


# 📍 Visão Geral

## 🎯 Objetivo

Desenvolver um sistema completo para cadastro, listagem e gerenciamento de jogos, permitindo que os usuários registrem games com suas respectivas categorias (ex: ação, aventura, RPG) e plataformas (ex: PC, PS5, Xbox). 

O sistema fornece uma API backend robusta e segura, com autenticação, validação de dados, filtros, ordenação e paginação, servindo como base para um site de registro de jogos.

---

## 🧬 Funcionalidades

- Cadastro de usuário com validação dos campos (nome completo, email, senha e confirmação de senha)

- Login de usuário com autenticação via JWT

- Cadastro de jogos, com título, descrição, plataforma, data de aquisição, etc.

- Listagem de jogos cadastrados, com possibilidade de filtro por plataforma

- Atualização dos dados dos jogos (CRUD completo)

- Exclusão de jogos da lista

- Cadastro, listagem, atualização e exclusão de plataformas

- Relacionamento entre jogos e plataformas (um jogo pertence a uma plataforma)

- Controle de erros e validações nas requisições (retorno de mensagens claras para o usuário)

- Uso de rotas protegidas para as operações que exigem autenticação

---

## ⚙️ Instalação

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Banco de dados (ex: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Passos

```bash
# Clone o repositório
git clone https://github.com/Giron-jpg/AWS_FS_ABR25_D02_COMPASS_Game_List.git

# Acesse a pasta do projeto
cd backend

# Instale as dependências
npm install
# ou
yarn

# Crie um arquivo .env com as variáveis de ambiente necessárias (veja abaixo)

# Rode o projeto
npm run dev
# ou
yarn dev

```
---

## 🤖 Variáveis de Ambiente
```bash
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

PORT={port} // Insira aqui sua porta de conexão
JWT_SECRET=sua_chave_secreta
DATABASE_URL=postgresql://usuario:senha@localhost:5432/database
```
---

## 💻 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **React**
- **Express**
- **MongoDB + Mongoose**
- **JWT**
- **Bcrypt**
- **TSX**
- **ESLint + Prettier**
---

# 🤝 Contribuições

- [Jessica](https://github.com/jessicasantosb)
- [João Manuel](https://github.com/Joao-Manuel-S-M)
- [João Giron](https://github.com/Giron-jpg)
- [Leticia Schiavon](https://github.com/LeticiaAmeliaSchiavon)
- [Lucas Araujo](https://github.com/lucaaas-araujo)