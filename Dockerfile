FROM node:latest
USER root
WORKDIR /home/app
COPY ./package.json /home/app/package.json
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run start
