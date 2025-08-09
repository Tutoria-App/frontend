# Tutoria - Interactive Learning Platform

Tutoria is an interactive learning platform built with **Vite + React + Tailwind CSS + Framer Motion** for the frontend and **Node.js + Express + MongoDB** for the backend.

## 🚀 Features
- 🎥 **Hero Section** with video background
- 📚 Multiple animated sections (Why Choose Us, Features, Explore, Join Us)
- 🎨 Styled with Tailwind CSS
- ✨ Scroll-triggered animations via Framer Motion
- 🔐 Navbar visible only for logged-in users
- 📞 Footer with contact info and quick links
- 🔗 Integrated with a Node.js backend (API calls via Axios)

## 📦 Tech Stack
### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM](https://reactrouter.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/tutoria.git
cd tutoria
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup environment variables
Create a `.env` file in the root folder with:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4️⃣ Start development server
```bash
npm run dev
```
Then open: [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure
```
src/
  assets/         # Images and videos
  components/     # Reusable UI components
  pages/          # Page components (LandingPage, etc.)
  services/       # API calls (Axios instance)
  App.jsx         # Main app file
  main.jsx        # Entry point
```

---

## 🛠️ Scripts
- **`npm run dev`** – Start development server
- **`npm run build`** – Build for production
- **`npm run preview`** – Preview production build locally

---

## 📜 License
This project is licensed under the MIT License.  
Feel free to modify and use for your own learning purposes.
