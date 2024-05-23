FROM node:22-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@5.0.1
COPY . /app
RUN npm run build

RUN npm install serve@14.2.0 
WORKDIR /app/build
CMD ["serve", "-p", "80", "-s", "."]