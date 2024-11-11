# We use the Node.js base image
FROM node:14

# We configure the working directory inside the container
WORKDIR /app

# We copy the package.json and package-lock.json files
COPY package*.json ./

# We install the dependencies
RUN npm install

# We copy the source code
COPY . .

# We expose port 3000 in the container
EXPOSE 3000

# Command to start the application
CMD ["node", "app.js"]