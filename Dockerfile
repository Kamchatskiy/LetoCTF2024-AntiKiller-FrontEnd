FROM node:lts-buster
WORKDIR /app
COPY . .
RUN npm install && npm install -g serve && npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]

# FROM node:latest
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 8080
# CMD ["npm", "start", "start"]