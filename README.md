# E-Commerce API with Clean Architecture

This is a learning project to explore building an e-commerce API using Node.js, Express.js, and PostgreSQL with Sequelize ORM. 
The project follows the principles of Clean Architecture to promote separation of concerns and testability.

It is a personal follow-up and update out of a Platzi course, incorporating changes to host the project on Railway.

**Original Repo:** \[[curso-nodejs-postgres](https://github.com/platzi/curso-nodejs-postgres/tree/22-step)]

## Features

*   Standard CRUD operations for managing products, categories, users, customers, and orders. 
*   Filtering, sorting, and pagination for product listings.
*   Data validation using Joi for data integrity. 
*   Graceful error handling with appropriate HTTP status codes. 


## Technologies Used

*   Node.js
*   Express.js
*   PostgreSQL
*   Sequelize ORM
*   Docker Compose

## Project Structure

The project follows a layered architecture inspired by Clean Architecture principles.

*   **Controllers:** Handle HTTP requests and responses.
*   **Services:** Implement business logic and data manipulation.
*   **Repositories:** Interact with the database using the Sequelize ORM.

## Docker Integration

The project uses Docker containers for running the PostgreSQL database and pgadmin, a visual interface for managing the database. This provides a consistent and isolated environment for development and testing.

## Getting Started

1.  Clone the repository.
2.  Install dependencies using `npm install`.
3.  Set up a PostgreSQL database and configure environment variables.
4.  Run migrations using `npm run migrations:run`.
5.  Start the development server using `npm run dev`.
6.  Test requests on your prefered client (Imsomnia | Postman | ThunderClient).

## Contributing

Welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License.
