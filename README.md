# Resume Builder Web Application

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

```plaintext
resume-builder/
├── client/          # React frontend
├── server/          # Express backend
├── config/          # Database and API configuration
├── models/          # Mongoose schemas
├── routes/          # REST API routes
├── controllers/     # Business logic
├── middleware/      # Authentication and guards
├── hooks/           # AI utility helpers
├── utils/           # Utility functions (email, tokens, etc.)
├── public/          # Static assets
├── README.md
└── package.json```

---

📦 Installation
1. Clone the Repository
git clone https://github.com/Subhodeep77/Resume-Builder.git
cd Resume-Builder

---

2. Install Dependencies
Backend
cd server
npm install
Frontend
cd ../client
npm install

---

3. Environment Variables
Create a .env file in the server directory.

PORT=3000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@example.com        # optional
EMAIL_PASS=your_email_app_password       # app-specific password
OPENAI_MODEL=gpt-4.1                    # or any supported model
IMAGEKIT_PRIVATE_KEY=example
OPENAI_BASE_URL=example
OPENAI_API_KEY=example

---

4. Run the Application
Backend
npm run dev
Backend runs at: http://localhost:3000

Frontend
cd client
npm run dev
Frontend runs at: http://localhost:5173


-----

🤝 Contributing
Contributions are welcome.
Feel free to fork the repository, create a feature branch, and submit a pull request.
