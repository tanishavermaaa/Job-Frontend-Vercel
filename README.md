# 💼 Job Application Tracker – Frontend (React)

This is the frontend of the Job Application Tracker web application, built using React.js. It provides users with a clean and responsive interface to register, log in, and manage their job applications seamlessly.

---

## 🚀 Project Overview

The Job Application Tracker helps users:

* Keep track of job applications
* View application status at a glance
* Add, edit, and delete job entries
* Navigate through a secure and modern user experience

This frontend consumes RESTful APIs from the backend (Node.js + Express) and communicates using Axios with secure token-based headers.

---

## ✨ Features

* 🔐 User Login and Registration pages
* 🏠 Dashboard to view all jobs
* ➕ Add Job and ✏️ Edit Job pages
* 🧾 JobCard component for listing jobs
* 🔍 Filtering, sorting, and searching
* 🚫 Access restriction using JWT (stored in localStorage)
* 💡 Clean layout and user-friendly design
* 📱 Fully responsive (mobile/tablet/desktop)

---

## 🧰 Tech Stack

* React.js
* React Router DOM
* Axios
* CSS (normal CSS, no framework)
* JWT (used from backend via Axios headers)

---

## 📁 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── AddJob.js
│   │   └── EditJob.js
│   ├── components/
│   │   └── JobCard.js
│   ├── App.js
│   └── index.js
├── package.json
```



