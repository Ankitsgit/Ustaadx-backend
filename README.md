# 🧠 UstaadX – Peer-to-Peer Skill Exchange Platform

[![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/frontend-React-blue)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/backend-Node.js-green)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen)](https://mongodb.com)

**UstaadX** is a collaborative platform where learners and experts can connect, teach, and learn from each other in a fair exchange-based ecosystem. Whether it's coding, music, dance, or design—UstaadX is your digital learning bazaar.

---

## 🌟 Features

- 🎓 **Skill Exchange Posts**: Offer a skill and seek another in return
- 💬 **Real-Time Messaging**: Built-in chat using Socket.IO
- 📆 **Booking System**: Schedule or request sessions
- 🔐 **JWT Auth**: Secure login and route protection
- 🧠 **Personal Dashboard**: View and manage your exchanges
- 🏷️ **Tags & Categories**: Easily find relevant matches
- 🌈 **Responsive Design**: Mobile-friendly, clean UI

---

## 🏗️ Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| **Frontend**| React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js       |
| **Database**| MongoDB, Mongoose         |
| **Auth**    | JWT (JSON Web Tokens)     |
| **Chat**    | Socket.IO (WebSockets)    |
| **Deployment**| Vercel (frontend), Render/EC2 (backend) |

---

## 🚀 API Overview

| Method | Endpoint                      | Description                          |
|--------|-------------------------------|--------------------------------------|
| POST   | `/api/auth/register`          | Register a new user                  |
| POST   | `/api/auth/login`             | Login and receive JWT token          |
| GET    | `/api/users/profile`          | Get user profile                     |
| POST   | `/api/posts`                  | Create a new skill swap post         |
| GET    | `/api/posts`                  | Fetch recent skill exchange posts    |
| GET    | `/api/chat/:userId`           | Fetch messages with a user           |
| POST   | `/api/chat/send`              | Send a message                       |

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- Vite
- Redis (optional)

---

### 📦 Backend Setup

```bash
# Clone the repository
git clone 
https://github.com/Ankitsgit/Ustaadx-backend


# Install dependencies
npm install

# Create a .env file
cp .env.example .env
# Edit .env with your configuration
# Fill in MongoDB URI, JWT_SECRET, CLIENT_URL

# Start server
npm run dev

### Frontend Setup

The frontend repository is available at: [UstaadX Frontend](https://github.com/Ankitsgit/UstaadX)

```bash
# Clone frontend repository
git https://github.com/Ankitsgit/UstaadX
cd client

# Follow frontend-specific setup instructions
```
🌍 Environment Variables
.env (Backend)
env
Copy
Edit
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
.env (Frontend)
env
Copy
Edit
VITE_API_URL=http://localhost:8000
🧪 Testing
bash
Copy
Edit
# Run backend tests (if configured)
npm test
📁 Project Structure
csharp
Copy
Edit
ustaadx/
├── client/               # React frontend
│   ├── src/
│   └── public/
├── server/               # Node/Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
🖼️ UI Screenshots
(Add UI screenshots of home page, chat, dashboard, etc.)

🚀 Deployment
✅ Frontend on Vercel
Push frontend to GitHub

Go to Vercel > New Project

Select repo and set the env variable:

ini
Copy
Edit
VITE_API_URL=https://your-backend-url.com
Build command: npm run build

Output directory: dist

✅ Backend on Render (or EC2)
Go to Render

Select Web Service

Connect repo or upload code

Set environment variables:

PORT

MONGO_URI

JWT_SECRET

CLIENT_URL=https://your-vercel-frontend.vercel.app

🤝 Contributing
We welcome contributions from the open source community.

To Contribute:
Fork the repository

Create a new branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make your changes

Push your branch:

bash
Copy
Edit
git push origin feature/your-feature-name
Open a pull request

🙏 Acknowledgements
Socket.IO team for real-time magic

ShadCN for modern UI inspiration

MongoDB for flexible data modeling

All open-source contributors ❤️

📄 License
This project is licensed under the MIT License

📬 Contact
Project Lead: Ankit Shukla

Email: ankitshukla@email.com

GitHub: @yourgithub

Made with 💡 for community learners around the world.