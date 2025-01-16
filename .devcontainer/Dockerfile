FROM node:22.13.0

RUN apt-get update && apt-get install -y docker.io

# Benutzer "node" zur Docker-Gruppe hinzufügen, falls er noch nicht Mitglied ist
RUN if ! groups node | grep -q docker; then usermod -aG docker node; fi

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Es gab ein Problem mit Berechtigungen, sollte hiermit behoben werden
RUN chown -R node:node /app

COPY . .

EXPOSE 3000

USER node