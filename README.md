# Tasklyzer

Tasklyzer is a todo list application with a React frontend and Node.js backend.

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:4000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Design and Architecture Decisions

1. **Frontend Framework**: Next.js
   - Provides server-side rendering and easy routing
   - TypeScript support for better type safety

2. **Styling**: Tailwind CSS
    - Utility-first CSS framework for rapid UI development
    - Easy to customize and maintain

3. **UI Components**: Components using ShadCN
   - Flexible and customizable design system
   - Responsive layout for various screen sizes

4. **State Management**: React Hooks (useState, useEffect)
   - Simpler state management for a small-scale application
   - Easy to understand and maintain

5. **API Communication**: Axios
   - Promise-based HTTP client for making API requests
   - Easy to use and configure

6. **Backend**: Express.js
   - Lightweight and flexible Node.js web application framework
   - Easy to set up RESTful APIs

7. **Database**: SQLite
   - Serverless, self-contained database
   - Suitable for small to medium-sized applications

8. **ORM**: TypeORM 
   - Provides an abstraction layer for database operations
   - Supports TypeScript, making it a good fit for the project