<p align="center">
  <img src="https://img.icons8.com/fluency/48/node-js.png" width="50"/>
  <img src="https://img.icons8.com/color/48/typescript.png" width="50"/>
  <img src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" width="50"/>
  <img src="https://img.icons8.com/color/48/react-native.png" width="50"/>
  <img src="https://img.icons8.com/color/48/docker.png" width="50"/>
  <img src="https://img.icons8.com/color/48/amazon-web-services.png" width="50"/>
</p>

<h1 align="center">Game List - Fullstack Project (Deploy with Docker + AWS EC2)</h1>

## 🌍 Live Demo (AWS)

🟢 Access the live application at:

**http://ec2-3-144-27-179.us-east-2.compute.amazonaws.com/login?message=You%20must%20log%20in%20first**

---

## 📍 Overview

Fullstack game management project with a backend (Node + Express + TypeScript), frontend (React + Vite), and MongoDB database.

---

## 🚀 Features

- User registration and login (JWT authentication)
- Create, list, edit, and delete games
- Create and manage platforms
- Filter games by platform
- Validations, clear error messages, and protected routes

---

## 🐳 Deploy with Docker

### ✔️ Running locally with Docker

#### Prerequisites:
- Docker installed on your machine

#### Steps:

```bash
# Clone the repository
git clone https://github.com/lucaaas-araujo/AWS_FS_ABR25_D03_COMPASS_-Game_List-.git

# Enter the project folder
cd AWS_FS_ABR25_D03_COMPASS_-Game_List-

# Create the .env files as shown below
```

#### 🔐 Environment Variables:

**Backend (`/backend/.env`):**
```
PORT=8888
JWT_SECRET=your_secret_key
DATABASE_URL=mongodb://mongo:27017/gamelist
```

**Frontend (`/frontend/.env`):**
```
VITE_API_URL=http://localhost:8888
```

#### 📦 Start the containers:

```bash
docker compose up -d --build
```

The application will be available at:

 [http://localhost](http://localhost)

✅ MongoDB also runs inside a Docker container, so there's no need to install it locally!

---

## ☁️ Deploy on AWS EC2 (Docker)

This project was deployed on an AWS EC2 instance using Docker. That means the application keeps running in the cloud, even when your PC is turned off.

### Deployment steps:

1. Create an Ubuntu instance via AWS Console
2. Connect to the instance using SSH
3. Install Docker

4. Clone the repository:
   ```bash
   git clone https://github.com/lucaaas-araujo/AWS_FS_ABR25_D03_COMPASS_-Game_List-.git
   cd AWS_FS_ABR25_D03_COMPASS_-Game_List-
   ```

5. Create the `.env` files as shown above (backend and frontend)

6. Start the containers:
   ```bash
   docker compose up -d --build
   ```

---

## 🧪 Technologies Used

- Docker
- Nginx
- Node.js
- TypeScript
- React
- Express
- MongoDB (via Docker container)
- Docker & Docker Compose
- JWT, Bcrypt, Axios, ESLint, Prettier, Vite
