# practice1.js

This project is a simple Express.js application that has been dockerized. The app exposes two main routes and is ready to be run inside a Docker container.

## Files

- **app.js**: Contains the Express.js application, which exposes two routes:
  - `/`: Returns a JSON message `"Hello, World from Dockerized Express App!"`.
  - `/greet/:name`: Returns a personalized greeting based on the `name` parameter.
- **Dockerfile**: Defines the Docker environment to run the Express.js application.

## File Structure

├── app.js 
├── Dockerfile 
└── package.json


## Instructions to Run the Application

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Rodd-droid/practice1.js.git
cd practice1.js
```

### 2. Build the Docker Container

To build the Docker image, run:

```bash
docker build -t node-app .
```

### 3. Run the Container

To start the container, use the following command:

```bash
docker run -p 3000:3000 express-docker-app
```

This will expose the app at http://localhost:3000.

### 4. Test the Application

- Home route: Go to http://localhost:3000/ to receive a JSON message "Hello, World from Dockerized Express App!".
- Greet route: Go to http://localhost:3000/greet/{name}, replacing {name} with any name you choose, to get a personalized greeting.

### Dependencies

The application requires the following dependencies, listed in the package.json file:

- express: Web framework for building Node.js web applications.

### Usage Example

```bash
# Test the home route
curl http://localhost:3000/

# Test the personalized greeting route
curl http://localhost:3000/greet/Rodrigo
```

### Author
Project developed by Rodrigo Quilumba.