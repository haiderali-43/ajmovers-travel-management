# Use a base image
FROM node:20.10.0

# Set the working directory
WORKDIR /app

# Copy the source code to the working directory
COPY package.json .

# Install dependencies (if any)
RUN npm install
COPY  . .


# Define the command to run the application
CMD ["npm", "start"]