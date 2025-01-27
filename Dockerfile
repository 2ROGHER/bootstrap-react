####################################
# El archivo Dockerfile debe contener las instrucciones para crear una 
# imagen que sirva tu aplicación React. A continuación, un ejemplo de cómo configurarlo
###################################

# Use the Node.js image to compile and serve the React application
FROM node:16-alpine AS build

# Set the working directory for the container
WORKDIR /app

# Copy all config files from the project 
COPY package*.json ./

# Install all dependencies into development environment
RUN npm install


# Copy rest of the source code 
COPY . .

# Build the application to production environment
RUN npm run build:prod

# Use the imagen lighter to serve the react aplication (nginx)
FROM nginx:1.23-alpine

# Copy all builded files to directory where the server (nginx) serves the aplication
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 by nginx serves the aplication
EXPOSE 80

# Command to start nginx server
CMD [ "nginx", "-g", "daemon off;" ]


