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
````
### Frontend Setup

The frontend repository is available at: [UstaadX Frontend](https://github.com/Ankitsgit/UstaadX)

```bash
# Clone frontend repository
git https://github.com/Ankitsgit/UstaadX
cd client

# Follow frontend-specific setup instructions
```

### Environment Variables

Create a `.env` file in the `\Ustaadx-backend` directory:
```env
# Database
MONGO_URI=your_mongodb_uri



# Security
JWT_SECRET=your_jwt_secret
DEBUG=True

# External APIs
# Add your API keys here
```

## 🧪 Testing
# Run backend tests (if configured)
```bash
npm test
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   python manage.py test
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow PEP 8 style guidelines
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style

```bash
# Install development dependencies
pip install black flake8 isort

# Format code
black .

# Sort imports
isort .

# Lint code
flake8 .
```

## 📁 Project Structure

```
ustaadx-backend/
├── config/
│   └── db.js                        # MongoDB connection setup
│
├── controllers/
│   ├── authController.js           # Handles login, register, auth logic
│   ├── bookingController.js        # Booking creation & retrieval
│   ├── chatController.js           # Real-time chat/message logic
│   ├── exploreController.js        # Fetching recent skill exchange posts
│   └── userController.js           # User profile and data handling
│
├── middleware/
│   ├── authMiddleware.js           # JWT verification
│   └── protect.js                  # Route protection logic
│
├── models/
│   ├── Booking.js                  # Booking schema
│   ├── Message.js                  # Message/chat schema
│   └── User.js                     # User model schema
│
├── routes/
│   ├── auth.js                     # Auth API routes
│   ├── bookings.js                 # Booking-related routes
│   ├── chat.js                     # Chat routes (Socket or REST fallback)
│   ├── explore.js                  # Explore posts route
│   ├── users.js                    # User profile routes
│   ├── constant.js                 # Constants or shared values
│   └── index.js                    # Combine all routes
│
├── public/                         # Static file assets (if any)
├── .env                            # Environment config
├── package.json                    # Node project metadata and scripts
├── package-lock.json               # Locked dependency tree
└── README.md                       # Project documentation

```

## 🐛 Issue Reporting

Found a bug? Have a suggestion? Please create an issue:

1. Check existing issues first
2. Use the issue template
3. Provide detailed description
4. Include steps to reproduce
5. Add relevant labels

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Related Projects

- **Frontend**: [UstaadX Frontend](https://github.com/Ankitsgit/UstaadX)
- **Mobile App**: Coming soon...

## 👥 Team

- **Ankit** - Lead Developer
- **Email** -ankit77us@gmail.com
- **Github** -@ankitsgit

Email: ankitshukla@email.com





## 🙏 Acknowledgments

Socket.IO team for real-time magic

ShadCN for modern UI inspiration

MongoDB for flexible data modeling

All open-source contributors ❤️

## 📞 Support

- Create an [issue](https://github.com/Ankitsgit/Ustaadx-backend/issues) for bug reports
- Start a [discussion](https://github.com/Ankitsgit/Ustaadx-backend/discussions) for questions
- Contact the maintainers for urgent matters

---

Made with ❤️ by Ankit 
=======

