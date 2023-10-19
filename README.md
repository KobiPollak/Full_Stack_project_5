# Full_Stack_project_5

This React project is designed to help you learn about REST APIs by interacting with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) web service. JSONPlaceholder is a fake online REST API for testing and prototyping.

## Installation

To get started with this project, follow these steps:

- Clone the repository to your local machine:

```bash
git clone <https://github.com/KobiPollak/Full_Stack_project_5>
```
- Navigate to the project:
```bash
cd project_6
```
- Install the project dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```
- Start the development server:
```bash
npm start
# or
yarn start
```
## Using the Application

### Login

- Use the following login credentials to access the application:
  - Username: Bret
  - Password: 3159

### Dashboard

Once logged in, you will have access to the following features:

- **Info:** View user details.
- **Todos:** View the user's to-do list.
- **Posts:** View the user's posts and comments.
- **Albums:** View the user's albums and photos.

## REST API

This project interacts with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API. JSONPlaceholder is a mock online REST API service that provides data for testing and prototyping. The project uses the following API endpoints to fetch data:

- **User Info:** `https://jsonplaceholder.typicode.com/users/{userId}`
- **Todo List:** `https://jsonplaceholder.typicode.com/todos?userId={userId}`
- **User Posts:** `https://jsonplaceholder.typicode.com/posts?userId={userId}`
- **User Comments:** `https://jsonplaceholder.typicode.com/comments?postId={postId}`
- **User Albums:** `https://jsonplaceholder.typicode.com/albums?userId={userId}`
- **User Photos:** `https://jsonplaceholder.typicode.com/photos?albumId={albumId}`

To learn more about the JSONPlaceholder API and its available endpoints, please visit [JSONPlaceholder API Documentation](https://jsonplaceholder.typicode.com/guide).

Feel free to explore the API and use it for your learning purposes.
