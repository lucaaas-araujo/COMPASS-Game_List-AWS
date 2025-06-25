FROM node:alpine
WORKDIR /app
COPY package.jso ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
