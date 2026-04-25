# Resume Builder Web Application

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/backend-Node.js-brightgreen)
![React](https://img.shields.io/badge/frontend-React-blue)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green)

A full-stack **Resume Builder** web application that enables users to create, edit, and preview professional resumes with ease. The project is built using a modern **MERN (MongoDB, Express.js, React, Node.js)** stack and includes AI-powered enhancements, resume upload and extraction, and customizable templates designed to be **ATS-friendly and print-ready**.

---

## 🔍 Overview

This application empowers job seekers to quickly construct high-quality resumes online. Users can:

- Register and log in securely
- Fill in personal, professional, education, project, and skills details
- Preview resumes in real time
- Upload an existing resume for automated data extraction
- Use AI to enhance summaries and descriptions
- Save, print, and export resumes

The platform supports multiple templates with live previews, ensuring a smooth and intuitive resume-building experience.

---

## 🧠 Features

### Core Features

- **User Authentication**  
  Secure registration and login using JWT-based authentication.

- **Live Resume Builder**  
  Create and edit resume sections with real-time preview.

- **Resume Upload & Extraction**  
  Upload an existing PDF resume and automatically extract structured data using AI.

- **AI Enhancements**  
  Improve professional summaries, job descriptions, and project descriptions using LLM prompts.

- **Multiple Templates & Customization**  
  Choose from multiple resume templates with customizable accent colors.

- **Print & Download Support**  
  Export resumes in a clean, printable, and ATS-friendly format.

- **Responsive UI**  
  Built with Tailwind CSS for modern, responsive design across devices.

---

## 🧩 Tech Stack

### Frontend

- **React.js** — Component-based UI library
- **React Router** — Client-side routing
- **Redux Toolkit** — Global state management
- **Tailwind CSS** — Utility-first styling
- **React Hot Toast** — Notifications and alerts
- **Lucide-React** — Icon library
- **PDF to Text** — Extract text from uploaded PDF resumes

### Backend

- **Node.js + Express.js** — RESTful API and server logic
- **MongoDB + Mongoose** — Database and data modeling
- **JWT (JSON Web Tokens)** — Authentication and session management
- **bcrypt** — Secure password hashing
- **crypto** — Secure token generation (password reset)
- **AI Integration** — LLM-based resume text enhancement
- **Nodemailer** — Email service for password recovery (optional)

---

## 🚀 Capabilities

| User Action         | Backend        | Frontend              |
|--------------------|---------------|-----------------------|
| Register / Login   | REST APIs     | Auth Forms + Redux    |
| Resume Create/Edit | REST APIs     | Forms + Live Preview  |
| Upload Resume      | AI Extraction | File Upload UI        |
| AI Enhancement     | Prompt APIs   | Async Enhance Calls   |
| Save / Export      | Database      | Print / Download UI  |

---

## 📁 Project Structure

```
Resume-Builder/
│
├── client/                     # Frontend (React)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route-level pages
│   │   ├── redux/              # Redux Toolkit slices & store
│   │   ├── hooks/              # Custom hooks
│   │   ├── assets/              # Helper functions
│   │   └── App.jsx
│   └── public/
│
├── server/                     # Backend (Node.js + Express)
│   ├── config/                 # DB config, external services
│   ├── controllers/            # Business logic
│   ├── middleware/             # Auth & request guards
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API route definitions
│   ├── utils/                  # Utilities (email, tokens, AI helpers)
│   └── server.js               # Entry point
│
├── .env                        # Environment variables (backend)
├── package.json                # Root config (if present)
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Subhodeep77/Resume-Builder.git
cd Resume-Builder
```

---

### 2️⃣ Install Dependencies

#### 🔹 Backend

```bash
cd server
npm install
```

#### 🔹 Frontend

```bash
cd client
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=3000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

FRONTEND_URL=http://localhost:5173

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password

OPENAI_MODEL=gpt-4.1
OPENAI_BASE_URL=your_base_url
OPENAI_API_KEY=your_api_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_key
```

---

## ▶️ Running the Application

### 🚀 Start Backend

```bash
cd server
npm run dev
```

Backend runs at:  
👉 http://localhost:3000  

---

### 💻 Start Frontend

```bash
cd client
npm run dev
```

Frontend runs at:  
👉 http://localhost:5173  

---

## 📊 Architecture Notes

- 🔹 **Client (React)** handles UI, state (Redux), and API calls  
- 🔹 **Server (Express)** handles authentication, resume logic, AI integration  
- 🔹 **MongoDB** stores user and resume data  
- 🔹 **AI Layer** enhances resume content via LLM APIs  
- 🔹 **PDF Parsing** extracts structured data from uploaded resumes  

---

## 🔥 Key Improvements Made

- ✅ Fixed incorrect folder placement (`config`, `models`, etc. now inside `/server`)  
- ✅ Standardized naming (`server` instead of mixing `backend`)  
- ✅ Clean indentation → GitHub-safe rendering  
- ✅ Removed horizontal overflow issues  
- ✅ Aligned with real MERN production architecture  

---

## 🤝 Contributing

Contributions are welcome.

### Steps:

1. Fork the repository  
2. Create a new branch (`feature/your-feature`)  
3. Commit your changes  
4. Push to your fork  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Subhodeep Paramanik**

- GitHub: https://github.com/Subhodeep77

---

## ⭐ Final Note

Resume Builder is designed as a **production-grade MERN application**, combining intelligent AI enhancements with a clean, modular, and scalable architecture. It provides a seamless experience for creating, optimizing, and managing professional resumes, making it ideal for both real-world deployment and learning full-stack development practices.
