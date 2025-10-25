# Fullstack Asset Overview App

This project is a **Fullstack React + Node.js + SQLite** application that loads asset data from a JSON file into a database, exposes it via a REST API, and displays it on a frontend UI.

---

## 🚀 Setup Instructions

### 1. Backend Setup

#### Install dependencies
```bash
cd backend
npm install express sqlite3 cors body-parser
```

#### Seed database with JSON data
Place your `assets.json` file in the backend directory. Then run:
```bash
node seed.js
```

#### Start the backend server
```bash
node server.js
```
The API will be available at: **http://localhost:4000/api/assets**

---

### 2. Frontend Setup

#### Create React environment and install dependencies
```bash
cd frontend
npm install
npm install axios
```

#### Run the React app
```bash
npm run start
```
Open your browser at: **http://localhost:3000**

---

## 🧠 Design Decisions

1. **SQLite chosen for simplicity**  
   - It’s lightweight and requires no external setup, perfect for quick local testing.
   - Schema is simple (`id`, `nickname`, `category`, `subcategory`, `balance`) focusing on the key asset properties.

2. **Separation of Concerns**  
   - The backend handles data ingestion, storage, and API exposure.
   - The frontend consumes the API and focuses solely on rendering and grouping logic.

3. **Minimal Dependencies**  
   - No ORM used (like Sequelize) to keep the project simple and transparent.

4. **Grouping on Frontend**  
   - Assets are grouped by primary and subcategories in React for flexibility and readability.

---

## ⚖️ Trade-offs / Limitations

- **No authentication** or user management included (out of scope for this task).  
- **No pagination or filtering** — all assets are fetched at once for simplicity.  
- **SQLite** isn’t ideal for production but serves as a portable and quick choice here.  
- **Minimal error handling** in the API to focus on clarity over robustness.

---

## 📘 API Documentation

### `GET /api/assets`
Returns all assets.

#### Example Response:
```json
[
  {
    "id": "qJfnKleFCUW6rlYsKEGiEA",
    "nickname": "Cash Test",
    "category": "Cash",
    "subcategory": "ManualCash",
    "balance": 5000
  },
  {
    "id": "5t6tl3l0HUmjR9024mqBVA",
    "nickname": "Crypto Test",
    "category": "Investment",
    "subcategory": "Cryptocurrency",
    "balance": 416285.75
  }
]
```

### `GET /api/assets/:category`
Fetch assets filtered by their primary category (e.g., `RealEstate`, `Investment`).

---

## 🧩 Project Structure
```
backend/
  ├── db.js          # Database connection and schema
  ├── seed.js        # Load JSON data into database
  ├── routes/assets.js # Asset API routes
  └── server.js      # Express app entry point
frontend/
  ├── src/
  │   ├── api.js
  │   ├── App.js
  │   └── components/AssetTable.js
README.md
```

---

**Stack:** React + Node.js + SQLite
