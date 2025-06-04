# 💬 NestJS Chat App

A simple but solid chat application built using **NestJS**, supporting user login, sending messages, and retrieving chat history.

## 🚀 Features

- 🔐 Secure user authentication with JWT
- 👤 Authenticated user profile endpoint
- 📨 Send messages
- 📬 Retrieve your own messages

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nestjs-chat-app.git
cd nestjs-chat-app

# Install dependencies
npm install
🛠️ Running the App
bash
Copy
Edit
# Run in development mode
npm run start:dev

# OR build and run in production
npm run build
npm run start:prod
📬 API Endpoints
All endpoints are prefixed with /api.

🔐 Login
POST /api/auth/login

Users:
 { id: 1, email: 'user1@example.com', name: 'User One' },
 { id: 2, email: 'user2@example.com', name: 'User Two' },

Request Body:

json
Copy
Edit
{
  "email": "user1@example.com",
}
Response:

json
Copy
Edit
{
    "access_token": "",
    "user": {
        "id": ,
        "email": ""
    }
}
👤 Get User Profile
GET /api/users/me

Headers:

makefile
Copy
Edit
Authorization: Bearer <access_token>
Response:

json
Copy
Edit
{
    "id": ,
    "email": "",
    "name": ""
}
📨 Send Message
POST /api/messages

Headers:


makefile
Copy
Edit
Authorization: Bearer <access_token>
Request Body:

json
Copy
Edit
{
"recipientEmail": "",
"content":""
}
Response:

json
Copy
Edit
{
    "id": ,
    "sender": "",
    "recipient": "",
    "content": "",
    "timestamp": ""
}
📬 Get My Messages
GET /api/messages

Headers:

makefile
Copy
Edit
Authorization: Bearer <access_token>
Response:

json
Copy
Edit
[
    {
        "id": ,
        "sender": "",
        "recipient": "",
        "content": "",
        "timestamp": ""
    }
]
🧱 Tech Stack
NestJS – Backend framework

TypeScript – Strongly typed goodness

JWT – Token-based authentication

PostgreSQL / Prisma / or other – Database (your choice)

🧑‍💻 Author
Abdul Musawer Dinzad – the soldier of code, life, and legacy.
A proud builder. A silent fighter.
```
