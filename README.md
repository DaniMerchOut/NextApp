Blog Application with Next.js 14 and GraphQL

This project is a simple blog application built with **Next.js 14.2.13** and **GraphQL**. It allows users to view, create, and read blog posts. The application focuses on clean code, efficient GraphQL queries, and follows best practices in Next.js, including the use of the **App Router**, **Server Components**, and modern data fetching methods.

Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [How to Run the Application](#how-to-run-the-application)
- [Architectural Decisions](#architectural-decisions)
- [Conclusion](#conclusion)

Features

- **Homepage**: Displays a paginated list of blog posts (5 posts per page).
- **Post Details Page**: Shows full details of a post.
- **Create Post Page**: Provides a form to submit a new blog post.
- **Pagination**: Implemented on the homepage.
- **GraphQL Queries & Mutations**: Fetches posts, fetches individual posts by ID, and submits new posts.
- **Incremental Static Regeneration (ISR)**: Implemented using `revalidate` in the App Router.
- **Optimistic UI Updates**: Enhances user experience by immediately reflecting changes.
- **Form Validation**: Ensures title and body are not empty when creating a new post.
- **TypeScript**: Used throughout the project for type safety.

Tech Stack

- **Next.js 14.2.13**: Frontend framework with the App Router.
- **GraphQL**: For fetching and submitting data.
- **Apollo Client**: State management and GraphQL client.
- **Apollo Server**: Simple GraphQL backend.
- **TypeScript**: Static typing for JavaScript.
- **React Hook Form & Yup**: Form handling and validation.

Project Structure

```
blog-app/
├── app/
│   ├── create/
│   │   └── page.tsx
│   ├── posts/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── PostForm.tsx
├── graphql/
│   ├── mutations.ts
│   └── queries.ts
├── lib/
│   └── apollo-client.ts
├── package.json
├── tsconfig.json
└── README.md
```

Setup Instructions

Backend Setup

We use **Apollo Server** for the GraphQL backend.

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app/graphql-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Backend Server**

   ```bash
   node index.js
   ```

   The server will be running at `http://localhost:4000/`.

Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../blog-app
   ```

2. **Ensure Next.js Version**

   Update `package.json` to use Next.js 14.2.13:

   ```json
   // package.json
   {
     "dependencies": {
       "next": "14.2.13",
       "react": "18.2.0",
       "react-dom": "18.2.0",
       // other dependencies...
     }
   }
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The application will be running at `http://localhost:3000/`.

How to Run the Application

1. **Start the Backend**

   - Open a new terminal window.
   - Navigate to the backend directory:

     ```bash
     cd graphql-backend
     ```

   - Start the server:

     ```bash
     node index.js
     ```

2. **Start the Frontend**

   - In another terminal window, navigate to the frontend directory:

     ```bash
     cd blog-app
     ```

   - Start the development server:

     ```bash
     npm run dev
     ```

3. **Access the Application**

   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

Architectural Decisions

- **Next.js 14 App Router**: Utilizes the new App Router for improved routing and data fetching capabilities.
- **Server and Client Components**: Leverages Server Components for data fetching and Client Components for interactivity.
- **Apollo Client & Server**: Chosen for seamless GraphQL integration and state management.
- **TypeScript**: Provides type safety and helps catch errors during development.
- **React Hook Form & Yup**: Simplifies form handling and validation.
- **Incremental Static Regeneration (ISR)**: Improves performance by statically generating pages and updating them as needed.
- **Optimistic UI Updates**: Enhances user experience by immediately reflecting changes in the UI.
- **Modular Code Structure**: Separates concerns by organizing GraphQL operations, components, and pages logically.

Conclusion

This project fulfills the requirements of building a blog application using Next.js 14.2.13 and GraphQL. It demonstrates:

- Efficient GraphQL queries and mutations.
- Use of Next.js 14 features like Server Components and ISR.
- Optimistic UI updates for better user experience.
- Form validation to ensure data integrity.
- Clean, maintainable, and well-structured code using TypeScript.

Author: Danial Meechant
