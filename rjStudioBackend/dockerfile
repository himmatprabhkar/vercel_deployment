# Step 1: Build the React app
FROM node:20

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json (if available)
COPY package*.json server.js ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port on which Nginx will run
EXPOSE 4000

CMD [ "node", "server.js"]