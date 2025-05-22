# 🎬 IMDB Clone App using React, React Router & Tailwind CSS

This project is a simplified clone of the **Internet Movie Database (IMDB)** built using **React**, **React Router DOM**, and **Tailwind CSS**. It demonstrates core React concepts such as component-based architecture, routing, dynamic pages, and styling with Tailwind.

---

## Live Demo

[Link](https://imdb-app-harsh.netlify.app/)

## 🛠️ Tech Stack

- **React**: UI Library
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first styling framework
- **Vite**: Fast build tool and development server

---

## 🚀 Getting Started

### 1. Create the Project with Vite

```bash
npm create vite@latest imdb-app --template react
cd imdb-app
npm install
```

````

### 2. Install Dependencies

```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind

**`tailwind.config.cjs`**:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**`src/index.css`**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `index.css` in `main.jsx`.

---

## 🧭 React Router Setup

### 1. Wrap App with `BrowserRouter`

**`main.jsx`**:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. Define Routes

**`App.jsx`**:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

---

## 🔄 Navigation with `<Link>`

Use `<Link>` for client-side navigation instead of `<a>`:

```jsx
import { Link } from "react-router-dom";

<Link to="/movies">Movies</Link>;
```

✅ Prevents full page reload
✅ Keeps SPA behavior intact

---

## 🔀 Dynamic Routing

You can render dynamic content using `useParams()` from `react-router-dom`:

```jsx
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  // Fetch movie using id or render based on id
  return <div>Movie ID: {id}</div>;
};
```

---

## ⚠️ Handling 404 Pages

Use a wildcard (`*`) route to handle unknown paths:

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 🎨 Tailwind Styling

Example of using Tailwind to style a component:

```jsx
<div className="p-4 bg-gray-900 text-white text-center">
  Welcome to IMDB Clone
</div>
```

---

## 💡 Best Practices Shared in Class

- Understand **client-side routing** for better user experience
- Prefer **components** for shared layouts like headers and footers
- Always check **official documentation** for updated practices
- Practice **dynamic routing** and **error handling**
- Maintain **clean folder structure**: `/pages`, `/components`, `/api`, etc.
- Reuse logic via **hooks** and **modular files**

---

## 📚 Key Features You Can Add

- ✅ Trending Movies
- ✅ Add to Watchlist
- ✅ Rating Filter & Sort
- ✅ Responsive Design
- ✅ Dynamic Details Page

---

## 📌 Final Thoughts

This project covers essential skills for building scalable and dynamic React apps:

- ✅ React Component Architecture
- ✅ SPA Routing with React Router
- ✅ Utility-First Styling with Tailwind
- ✅ Dynamic Data Handling
- ✅ Clean UI and UX Patterns

> 🧠 _“Consistent practice and reading documentation are crucial to mastering React and frontend development.”_

---

## 🎥 Demo (Coming Soon)

Stay tuned for a working live demo link or deploy it yourself on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🧩 Folder Structure (Suggested)

```
imdb-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── tailwind.config.cjs
├── vite.config.js
└── package.json
```

---

## 🙌 Happy Coding!
````
