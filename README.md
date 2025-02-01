# Tasty Ten

## Project Description

Tasty Ten is aiming to be a **full-stack Next.js application** that fetches data from an **external API** to display a curated list of 10 random favorite recipes.

This project leverages **Next.js API routes** (`pages/api/handleData.js`) to create a **custom backend**, enabling seamless data fetching and server-side processing.

It combines **React, Next.js, Tailwind CSS, and React-Bootstrap** to deliver a dynamic and user-friendly interface.  
With just one click, users can generate and explore recipe suggestions—perfect for busy individuals looking for quick meal ideas.

![Back-end and Front-end Communication](./public/BackendSolution.png)

## 🌐 API Reference

### 🔹 Get Recipes

```http
GET /api/handleData
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

The API will feature the following endpoints:

| HTTP Method | Path            | Request Body (JSON) | Response Body (JSON)                 | Status Code | Result                       |
| ----------- | --------------- | ------------------- | ------------------------------------ | ----------- | ---------------------------- |
| GET         | /api/handleData |                     | An array of up to ten recipe objects | 200         | Gets up to 10 recipe objects |

## Response Example

```
[
  {
    "title": "Chicken Curry",
    "ingredients": "Chicken, spices, onions, tomatoes",
    "instructions": "Mix ingredients, cook for 30 mins"
  }
]
```

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [Recipe API](https://www.api-ninjas.com/api/recipe)

## Authors

- [@lizwade](https://github.com/lizwade)
- [@sergio](https://github.com/skudz96)
- [@shanti](https://github.com/codesungrape)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🛠 Installation

To install and run this project locally:

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd tasty-ten
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the development server

```
npm run dev
```

The app should now be running at http://localhost:3000.

# 🚀 Deployment

## 🌍 Deploying Locally (Development Mode)

```
npm run dev
```

## 🔥 Production Build

```
npm run build
npm start
```

## 🚀 Deploying to Vercel (Recommended)

1. Install Vercel CLI (if not installed):

```
npm install -g vercel
```

2. Run:
   vercel
   Follow the prompts to deploy.

## 🌎 Deploying to Render

1. Push your code to GitHub.
2. Create a new Web Service on Render.
3. Set the Build Command:

```
npm install && npm run build
```

4. Set the Start Command:

```
npm start
```

5. Deploy your app.

## Contributing

## 🤝 How to Contribute

Contributions are always welcome!

### 1️⃣ Fork the repository

Click the **Fork** button at the top-right corner of the repository page to create a copy of the project in your GitHub account.

### 2️⃣ Create a feature branch

```sh
git checkout -b feature-name
```

### 3️⃣ Commit your changes

```sh
git commit -m 'Add some feature'
```

### 4️⃣ Push to the branch

```sh
git push origin feature-name
```

### 5️⃣ Submit a pull request

1. Go to the original repository on GitHub.
2. Click on the "Pull Requests" tab.
3. Click "New Pull Request" and select your branch.
4. Add a clear title and description of your changes.
5. Click "Create Pull Request" to submit.
   🚀 Your contribution will be reviewed, and once approved, it will be merged into the main branch!

# 🎥 Demo

🚀 Coming soon!

## ROADMAP

### 📌 MVP 2

- **Error Handling**
- Error Handling: Displays a message if no recipes are found after a user inputs a query.
- Implement a loading spinner to indicate when data is being fetched.
- **Responsive Design**
- Ensure the app is fully responsive and works on all devices.

### 📌 MVP 3

### 🎯 Upcoming Features

- **Favorite Recipes:**

  - Allow users to click on a recipe and add it to their favorites.
  - Create an API route to store favorite recipes in a database (MongoDB or SQL).
  - Develop a backend to handle these interactions securely.

- **Favorites Page:**

  - Build a separate page where users can view their saved recipes.
  - Fetch and render relevant data dynamically from the database.

- **Full CRUD Functionality:**

  - **Update:** Allow users to edit their saved recipes.
  - **Delete:** Enable users to remove recipes from their favorites.
  - Ensure backend API routes support these operations securely.

- **Backend Enhancements:**
  - Optimize database queries for performance.
  - Implement proper error handling and validation.
  - Secure API endpoints to prevent unauthorized access.

### 🔜 Future Enhancements

- Implement authentication (e.g., login/logout) for personalized user data.
- Add search and filter functionality for saved recipes.
- Improve UI/UX with animations and better responsiveness.
