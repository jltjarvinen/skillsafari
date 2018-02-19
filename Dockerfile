# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy the sources to the container
ADD gatsby-config.js /usr/src/app/gatsby-config.js
ADD gatsby-node.js /usr/src/app/gatsby-node.js
ADD package.json /usr/src/app/package.json
ADD src /usr/src/app/src

# install required software
RUN npm install --silent
RUN npm install --save gatsby-cli@1.1.40
RUN npm install -g gatsby-cli@1.1.40

# build the application
RUN gatsby build

# expose the default server port
EXPOSE 9000

# start the server
CMD ["npm", "start"]
