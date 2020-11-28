# pull official base image
FROM node:13.12.0-alpine
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY . ./

RUN npm cache clean --force && \
	npm config set strict-ssl false && \
	npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000 3001
CMD ["npm", "start"]
