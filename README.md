# Resume Builder Web Application

A full-stack **Resume Builder** web application that enables users to create, edit, and preview professional resumes with ease. This project leverages a modern **MERN (MongoDB, Express.js, React, Node.js)** stack along with advanced functionality for uploading existing resumes, AI-enhanced text generation, and customizable templates for printable/ATS-friendly resumes.

## 🔍 Overview

This application empowers job seekers to quickly construct professional resumes online. Users can register and log in, fill in personal details, work experience, education, projects and skills, view a live preview, use AI enhancements for specific sections, upload an existing resume for extraction, and save their resume data. It supports multiple templates and real-time previews, making resume building intuitive and efficient.

## 🧠 Features

### Core

- **User Authentication** – Register, login, secure token-based access.
- **Live Resume Builder** – Users can add personal, professional, project, education, and skills data.
- **Resume Upload & Extract** – Import a PDF resume and auto-extract structured data using an LLM agent.
- **AI Enhancements** – Improve summaries, job descriptions, and project descriptions using prompt-based AI.
- **Multiple Templates & Preview** – Choose different resume templates with accent color options.
- **Print / Download Support** – Format the resume for printing/ downloading as PDF.
- **Responsive/UI Friendly** – Designed using Tailwind CSS for adaptive layouts.

## 🧩 Tech Stack

Below is the core stack used in this project:

### Frontend

- **React.js** — UI library for building responsive interface.
- **React Router** — For client-side routing.
- **Redux Toolkit** — Global state management.
- **Tailwind CSS** — Utility-first CSS framework.
- **React Hot Toast** — Notifications.
- **Lucide-React Icons** — UI icon set.
- **PDF to Text (pdf-to-text)** — Extract text from uploaded PDF files.

### Backend

- **Node.js + Express.js** — Backend server and REST API.
- **MongoDB + Mongoose** — NoSQL database for persisting user and resume data.
- **JWT (JSON Web Tokens)** — Authentication and session management.
- **bcrypt** — Password hashing and security.
- **crypto** — Token generation for secure reset flows.
- **AI Integration** — Interact with LLM endpoints for text enhancement.
- **Nodemailer** — Email delivery service for password recovery (optional).

## 🚀 Capabilities

| User Action | Backend | Frontend |
|-------------|---------|-----------|
| Register/Login | REST | Auth form + redux |
| Resume Create/Edit | REST | Forms + live preview |
| Upload Resume | AI extraction | UI upload + parser |
| AI Enhance | Prompt API | Async enhance calls |
| Save/Export Resume | DB | Print/Download UI |

## 📁 Project Structure

resume-builder/
├── client/ … React app
├── server/ … Express API + AI integration
├── config/ … DB, API settings
├── models/ … Mongoose schemas
├── routes/ … REST endpoints
├── controllers/ … Business logic
├── hooks/ … AI utility helpers
├── middleware/ … Auth checks
├── public/ … Static assets
├── utils/ … Utils (email sender etc.)
├── README.md
└── package.json

