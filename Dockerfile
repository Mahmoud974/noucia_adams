# Utilise une image de base avec Node.js
FROM node:18

# Définis le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de package pour installer les dépendances
COPY package.json ./
COPY package-lock.json ./

# Installe les dépendances avec l'option --legacy-peer-deps pour éviter les conflits
RUN npm install --legacy-peer-deps

# Copie tous les fichiers du projet dans le conteneur
COPY . .

# Définit la variable d'environnement pour éviter l'erreur OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

# Expose le port 3000 pour que l'application soit accessible
EXPOSE 3001

# Commande pour lancer l'application
CMD ["npm", "start"]
