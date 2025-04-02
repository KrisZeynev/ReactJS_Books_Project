# ReactJS_Books_Project - Brief documentation

## Installation

1. **Clone or Download the Project**  
   Download the project files or clone the repository to your local machine.

2. **Set up the Server**

   - Open a new terminal window.
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Start the server using Node.js:
     ```bash
     node server
     ```

3. **Set up the Client**
   - Open another terminal window.
   - Navigate to the `client` folder:
     ```bash
     cd client
     ```
   - Run the client with Vite:
     ```bash
     npm run dev
     ```
   - Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the app.

## Overview

This is my ReactJS app that allows authenticated users to create new books. If the currently authenticated user is the owner of a book, they have the ability to edit or delete the book. If they are not the owner, they can like or dislike the book. Every authenticated user has the ability to add comments, but only the owner of a comment can edit or delete it.

On the other hand, non-authenticated users can only view the already added books and see their details, but they cannot interact with them.

# Project Structure

The project is organized into folders to ensure clarity and ease of management for the components and functionality.

- **`components`**: This folder contains all the components of the application. Each component is responsible for a specific part of the UI and can be reused. For example, components for displaying books, showing book details, forms for adding new books, etc.

- **`contexts`**: This folder contains the contexts that manage the global state of the application, such as user information and authentication status. `UserContext` is likely used to store data about the current user and their authentication status.

- **`guards`**: This folder contains route guard components. `AuthGuard` will check if the user is authenticated before allowing access to certain parts of the application, while `GuestGuard` can ensure that unauthenticated users can only access the public parts of the site.

- **`React Router`**: Used for client-side routing, allowing navigation between different views without reloading the page.

- **`Tailwind CSS`**: Used for styling the application, ensuring a modern and responsive design.

- **`React Icons`**: Used for adding scalable and customizable icons to enhance the UI.

This structure helps maintain and develop the project by separating responsibilities between the different components and parts of the application.

## How the Application Works

- The client (React app) sends requests to the server's REST API to fetch, add, update, or delete books.
- User interactions, such as liking, disliking, and commenting on books, are handled through API requests to the server.
- The server responds with data in JSON format, which is displayed dynamically on the client side.
