# 🚀 React + Serverless CRUD App

This is a simple **React + TypeScript** frontend that performs CRUD operations using a **Serverless backend API (AWS Lambda)**. The app allows users to add, edit, delete, and view user data such as name, email, age, phone number, and address.

---

## 🔧 Tech Stack

- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Serverless API (e.g., AWS Lambda)
- **HTTP Client**: Axios
- **Tooling**: Vite

---

## 📋 Features

✅ Add new users  
✅ Edit existing users  
✅ Delete users  
✅ View all users  
✅ Cancel edit and reset form  
✅ Auto-clear form on submit or cancel  

---

## 🧾 Fields Managed

Each user object includes:

- `name` (string)
- `email` (string)
- `age` (number)
- `phone` (string)
- `address` (string)

> The backend auto-generates a `userId`, used only for updates and deletions.

---

## 🌐 Serverless API URL

Make sure to set your serverless API base URL in the `.env` file:

```env
VITE_API_BASE=https://your-serverless-api-url.com/users
```


## 🌐 Live Preview

```
https://userinfo.torktoo.com
```

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** installed. If not, you can install it from [nodejs.org](https://nodejs.org/).

### Clone the repository

```bash
git clone https://github.com/UtsavGohel/serverless-crud-FE.git
cd serverless-crud-FE
```
Install dependencies

```bash
npm install
```

Copy `.env.example` into `.env` file

Run the development server

```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173 to see the app in action.



## Contributing

Feel free to fork this project and submit pull requests. If you find any bugs or have suggestions for improvements, open an issue in the GitHub repository.


## Contact

For any questions or feedback, feel free to reach out:

Email: utsavgohel2002@gmail.com

GitHub: https://github.com/UtsavGohel
