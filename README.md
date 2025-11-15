# Taskify – Backend (Node.js + Express + MongoDB)

Taskify is a task management REST API built using Node.js, Express, and MongoDB.  
This backend serves as the core API that manages users, tasks, authentication, and database communication.

---

## 🚀 Features

- Express server setup  
- MongoDB & Mongoose database connection  
- Test API route  
- Environment variable setup  
- Clean project structure  
- Nodemon for auto-restart  

---

## 📁 Project Structure

taskify/
│── server.js
│── package.json
│── .gitignore
│── /config
│ └── db.js
│── /routes
│ └── taskRoutes.js
│── /controllers
│ └── taskController.js
│── /models
└── taskModel.js

yaml
Copy code

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Wade-Brian/Taskify.git
cd Taskify
2. Install dependencies
bash
Copy code
npm install
3. Create a .env file
ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Start the server
bash
Copy code
npm run dev
🔍 Test API Route
Visit:

bash
Copy code
GET http://localhost:5000/api
Response:

arduino
Copy code
Taskify API is running...
🧰 Technologies Used
Node.js

Express.js

MongoDB

Mongoose

Nodemon

dotenv

📌 Author
Brian Okech Wade

Phase 2: Authentication & Authorization System
Overview
This phase implements a complete user authentication and authorization system using JWT (JSON Web Tokens), allowing users to register, log in, and securely access their own tasks.

Features Implemented ✅
Authentication
User registration with email and password

User login with credential validation

JWT token generation and verification

Password hashing using bcryptjs

Authorization
Protected routes requiring valid JWT tokens

User-specific task management

Middleware for token verification

Secure password storage

Security
Password hashing with salt rounds

JWT tokens with expiration (30 days)

Protected API endpoints

User data isolation

API Endpoints
Authentication Routes
Method	Endpoint	Description	Access
POST	/api/auth/register	Register new user	Public
POST	/api/auth/login	Login user	Public
Protected Task Routes (Require JWT Token)
Method	Endpoint	Description
GET	/api/tasks	Get all tasks for logged-in user
POST	/api/tasks	Create new task for user
PUT	/api/tasks/:id	Update user's task
DELETE	/api/tasks/:id	Delete user's task
Models
User Model
javascript
{
  username: String (required),
  email: String (required, unique),
  password: String (required, min: 6 characters),
  timestamps: true
}
Task Model (Updated)
javascript
{
  title: String,
  description: String,
  completed: Boolean (default: false),
  user: ObjectId (required, ref: 'User')
}
Middleware
Authentication Middleware
Verifies JWT tokens from Authorization header

Attaches user object to request

Protects routes from unauthorized access

Request Examples
User Registration
bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "123456"
  }'
User Login
bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
Access Protected Route
bash
curl http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
Environment Variables
Create a .env file with:

env
MONGODB_URI=mongodb://localhost:27017/taskify
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
File Structure
text
taskify/
├── models/
│   ├── userModel.js          # User schema with password hashing
│   └── taskModel.js          # Updated task schema with user reference
├── controllers/
│   ├── authController.js     # Registration and login logic
│   └── taskController.js     # Protected task operations
├── routes/
│   ├── authRoutes.js         # Authentication endpoints
│   └── taskRoutes.js         # Protected task endpoints
├── middleware/
│   └── authMiddleware.js     # JWT verification middleware
├── utils/
│   └── generateToken.js      # JWT token generator
└── config/
    └── db.js                 # Database configuration
Testing
Use the included test-auth.js script to verify the system:

bash
node test-auth.js
Dependencies Added
bcryptjs: Password hashing

jsonwebtoken: JWT token management

mongoose: MongoDB ODM

dotenv: Environment variables

cors: Cross-origin resource sharing

Security Features
Passwords are hashed before saving to database

JWT tokens expire after 30 days

Users can only access their own tasks

All task routes require authentication

Tokens are validated on every protected request

Status: ✅ COMPLETED & FULLY TESTED
