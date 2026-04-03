# 💰 Finance Dashboard Backend

A backend system for managing financial records with role-based access control and dashboard analytics.

---

## 🚀 Features

* 🔐 Authentication & Authorization

  * User registration & login (JWT-based)
  * Role-based access control (Viewer, Analyst, Admin)

* 💰 Financial Records Management

  * Create, view, update, and delete records
  * Filter records by type and category
  * User-specific data isolation

* 📊 Dashboard Analytics

  * Total income and expenses
  * Net balance calculation
  * Category-wise breakdown
  * Recent transactions

* 🛡️ Security & Validation

  * Password hashing using bcrypt
  * Protected routes using JWT middleware
  * Role-based permission checks
  * Input validation and error handling

---

## 🛠️ Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Atlas)
* Authentication: JSON Web Tokens (JWT)
* Other Tools: Mongoose, bcrypt, dotenv

---

## 📂 Project Structure

src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── app.js

---

## ⚙️ Setup Instructions

1. Clone the repository:
   git clone https://github.com/krishnabansal0302/finance-dashboard-backend.git
   cd finance-dashboard-backend

2. Install dependencies:
   npm install

3. Create .env file:
   PORT=5000
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key

4. Run the server:
   npm run dev

---

## 📡 API Endpoints

### 🔐 Auth

POST /api/auth/register
POST /api/auth/login

### 👤 Users (Admin only)

PATCH /api/users/:id/role

### 💰 Records

POST /api/records (Admin)
GET /api/records
PUT /api/records/:id (Admin)
DELETE /api/records/:id (Admin)

### 📊 Dashboard

GET /api/dashboard/summary

---

## 🔐 Role-Based Access

Viewer → View records
Analyst → View + analyze data
Admin → Full access (CRUD + user management)

---

## 🧠 Key Concepts Implemented

* RESTful API design
* Role-based access control (RBAC)
* Middleware-based authentication
* MongoDB aggregation for analytics
* Error handling and validation

---

## 📌 Assumptions

* Each user manages their own financial records
* Only admins can modify or delete records
* Dashboard data is calculated per user

---

## 🚀 Future Improvements

* Pagination for large datasets
* Advanced filtering (date range)
* Unit and integration tests
* API documentation (Swagger/Postman)

---

## 👨‍💻 Author

Krishna Bansal

