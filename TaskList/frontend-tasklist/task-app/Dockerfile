# Usa un'immagine base di Node.js
FROM node:18-alpine

# Imposta la directory di lavoro
WORKDIR /task-app

# Copia il resto dei file del progetto
COPY public/ /task-app/public
COPY src/ /task-app/src
COPY package.json /task-app/

# Installa le dipendenze
RUN npm install

CMD ["npm", "start"]