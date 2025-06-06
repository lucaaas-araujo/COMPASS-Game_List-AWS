<p align="center">
  <img src="https://img.icons8.com/fluency/48/node-js.png" width="50"/>
  <img src="https://img.icons8.com/color/48/typescript.png" width="50"/>
  <img src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" width="50"/>
  <img src="https://img.icons8.com/color/48/react-native.png" width="50"/>
</p>

<h1 align="center">Game List - Fullstack Project</h1>

# 📍 Overview

## 🎯 Goal

Development of a complete game registration, listing and management system that allows users to add games with their respective categories (e.g. Action, Adventure, RPG) and platforms (e.g. PC, PS5, Xbox).

The system provides a robust and secure backend API with authentication, data validation, filtering, sorting and pagination, which serves as the basis for a game registration page. On the front end, it delivers a complete, responsive and well-structured application with validations, context management and component-based architecture.

---

## 🧬 Features

- User registration with field validation (full name, email, password and password confirmation)

- User login with JWT authentication

- Game registration with title, description, platform, date of purchase, etc.

- Game list with filtering by platform

- Complete CRUD for game data

- Deletion of games from the list

- Create, list, update and delete platforms

- One-to-many relationship between platforms and games (a game belongs to a platform)

- Error handling and validation of requests with clear messages

- Protected routes for operations that require authentication

---

## ⚙️ Installation

## Prerequisites

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A database (ex: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Steps

```bash
# Clone the repository
git clone https://github.com/Giron-jpg/AWS_FS_ABR25_D02_COMPASS_Game_List.git

# Navigate to the backend folder
cd backend
# or navigate to the frontend folder
cd frontend

# Install dependencies
npm install
# or
yarn

# Create a .env file with the required environment variables (see below)

# Run the backend project
npm run dev:watch
# or
yarn dev:watch

# Run the frontend project
npm run dev
# or
yarn dev

```

---

## 🤖 Environment Variables

```bash
Create a .env file in the root of the backend folder with the following content:

PORT={your_port}
JWT_SECRET=your_secret_key
DATABASE_URL=postgresql://user:password@localhost:5432/database

```

```bash
Create a .env file in the root of the frontend folder with the following content:

VITE_API_URL=http://localhost:8888

```

---

## 💻 Technologies Used

- **Node.js**
- **TypeScript**
- **React**
- **Express**
- **Cors**
- **MongoDB + Mongoose**
- **JWT**
- **Bcrypt**
- **Vite**
- **JWT-decode**
- **Axios**
- **tsx**
- **ESLint + Prettier**

---

# 🤝 Contributors

- [Jessica](https://github.com/jessicasantosb)
- [João Manuel](https://github.com/Joao-Manuel-S-M)
- [João Giron](https://github.com/Giron-jpg)
- [Leticia Schiavon](https://github.com/LeticiaAmeliaSchiavon)
- [Lucas Araujo](https://github.com/lucaaas-araujo)
