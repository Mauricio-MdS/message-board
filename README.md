# Message Board

This is a message board project that I created to practice MongoDB, Express, and Node. It allows users to post messages and view messages posted by other users.

## Deployed site

You can access the deployed version of the message board at [https://msgboard.fly.dev/](https://msgboard.fly.dev/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Mauricio-MdS/message-board.git`
2. Navigate to the project directory: `cd message-board`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory and provide the following information:

   ```env
   DBURI=<URI here>
   ```

   Replace <URI here> with the URI to your MongoDB database.
5. Start the application: `npm start`
6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the message board.

## Technologies used

### MongoDB 6.06

The database for the message board. It is hosted on Atlas, a cloud database service.

### Express 4.16.1

A web application framework for Node.js used to build the server-side logic of the message board.

### Node 18.15.0

A JavaScript runtime environment used to execute server-side code.

### JavaScript

The programming language used for both server-side and client-side development.

### EJS 2.6.1

A template engine for Node.js used to generate dynamic HTML content. It simplifies the process of creating dynamic web pages.

### Mongoose 7.3.1

An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to interact with the database.

### Dotenv 16.3.1

A module used to load environment variables from a .env file. It is necessary to provide a .env file with a DBURI string containing the URI to the database if you clone this repository.
