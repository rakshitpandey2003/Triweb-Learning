# Quiz Manager Backend

Welcome to the Quiz Manager Backend, a powerful API service that provides quiz creation, publishing, and management functionality. This backend project uses routers, controllers, and modules to handle quiz-related operations. User authentication is secured with JWT, and MongoDB serves as the database. You can interact with the backend using Postman or integrate it into your frontend application.

## Technologies Used


![express](https://img.shields.io/bower/v/express?logo=express&label=express&color=blue)
![typescript](https://img.shields.io/bower/v/typescript?logo=typescript&logoColor=blue&label=typescript&color=light%20green%20)
![mongoose](https://img.shields.io/bower/v/mongoose?logo=mongoose&label=mongoose&color=orange)


## Features

- **User Authentication**: Secure your APIs with JWT-based user authentication.
- **Quiz Creation**: Create, edit, and manage quizzes.
- **Quiz Publishing**: Publish quizzes to make them accessible to users.
- **Quiz Taking**: Users can start quizzes, answer questions, and submit their tests.
- **Report Generation**: Access detailed reports for quiz analysis.
- **Database**: MongoDB is used as a scalable and robust database solution.

## API Endpoints
For API testing and interaction, you can refer to the following endpoints:

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate and log in a user.
- **POST /quizzes:** Create a new quiz.
- **GET /quizzes**: Retrieve a list of published quizzes.
- **GET /quizzes/:quizId**: Get details of a specific quiz.
- **POST /quizzes/start**: Start a quiz.
- **POST /quizzes/submit**: Submit a completed quiz.
- **GET /quizzes/reports**: View quiz reports.


