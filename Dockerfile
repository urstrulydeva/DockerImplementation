# Official Node.js runtime as the base image
FROM node:16

# Setting the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the app will listen on
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
