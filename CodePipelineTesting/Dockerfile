FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Default environment variable, can be overriden when Fargate starts the container
# Fargate environment variables should be set at the task level
ENV connectionString="Hardcoded Dockerfile Connection String"

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]