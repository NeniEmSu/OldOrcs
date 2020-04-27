# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node

# Create an application directory
RUN mkdir /prod

# The /app directory should act as the main application directory
WORKDIR /prod

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . .

# Build the app
RUN npm run build

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 3000

# Set host to localhost / the docker image
 ENV MONGO_DB_CONNECTION=mongodb://mongo:27017/oldorcs

# Set app port
# ENV NUXT_PORT=$PORT

# Start the app
CMD [ "npm", "start" ]


# docker build -t oldorcs .
