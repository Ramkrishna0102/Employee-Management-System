# 🧑‍💼 Employee Management System

A modern web-based task management system for both **Admin** and **Employees**.  
This system allows Admin to manage employee tasks and Employees to track the progress of their assigned tasks.

---

## 📌 Project Brief

This is a role-based task management system built using **React.js**, where:
- **Admin** can view all employees and their task summaries.
- **Employees** can log in to manage and view their own tasks (`New`, `Active`, `Completed`, `Failed`).

The UI is clean, responsive, and built for ease of use, with a focus on real-time updates and task categorization.

---

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS Modules
- LocalStorage (for data persistence)

---

## 👥 User Roles

### 1. Admin:
- Can log in with static credentials.
- Can view the list of all employees.
- Can view task summaries of each employee.

### 2. Employees:
- Can log in with their own credentials.
- Can view their personal task dashboard categorized by status:
  - New Task
  - Active
  - Completed
  - Failed

---

## 🔐 Admin Login

| **Email**           | **Password** |
|---------------------|--------------|
| admin@example.com   | 123          |

After login, the Admin is redirected to the **Admin Dashboard**, where they can view all employee names and their task statuses.

---

## 👤 Demo Employees

These 5 demo employees are preloaded into the system:

| ID | Name   | Email                  | Password |
|----|--------|------------------------|----------|
| 1  | Arjun  | e@e.com                | 123      |
| 2  | Sneha  | employee2@example.com  | 123      |
| 3  | Ravi   | employee3@example.com  | 123      |
| 4  | Priya  | employee4@example.com  | 123      |
| 5  | Karan  | employee5@example.com  | 123      |

---

## 🚀 How to Run the Project

```bash
# 1. Clone the repository
git clone https://github.com/Ramkrishna0102/Employee-Management-System.git

# 2. Navigate into the project folder
cd Employee-Management-System

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
