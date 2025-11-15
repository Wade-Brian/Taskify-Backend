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
