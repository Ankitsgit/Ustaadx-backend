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
git clone https://github.com/yourusername/ustaadx.git
cd ustaadx/server

# Install dependencies
npm install

# Create a .env file
cp .env.example .env
# Fill in MongoDB URI, JWT_SECRET, CLIENT_URL

# Start server
npm run dev

