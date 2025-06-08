# Prime Number Checker and Random Facts Web App

This project is a full-stack web application for checking if a number is prime.  
It consists of a **Flask** backend API and a **React** frontend built with **Vite** and **TailwindCSS**.

---

## 🗂️ Project Structure

```
backend/      # Flask API (Python)
frontend/     # React app (JavaScript)
README.md
.gitignore
```

---

## 🚀 Backend Setup (Flask API)

### Prerequisites

- Python 3.10+
- pip

### Installation

1. (Optional) Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate and if it doesn't work, try: cd venv\Scripts and then ./activate
   ```

2. Navigate to the backend folder:
   ```sh
   cd backend
   ```

3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

### Running the Backend

```sh
python app.py
```

- The backend will start on [http://localhost:5000](http://localhost:5000) by default.

---

## 💻 Frontend Setup (React + Vite)

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure API URL (optional):

   - The frontend uses `.env` to set the backend API URL.
   - By default, `.env` contains:
     ```
     VITE_API_URL=http://localhost:5000
     ```
   - Change this if your backend runs on a different host/port.

### Running the Frontend

```sh
npm run dev
```

- The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

---

## 🔗 Connecting Frontend and Backend

- The frontend fetches data from the backend using the URL set in `frontend/.env` (`VITE_API_URL`).
- Make sure the backend is running and accessible at the URL specified in `.env`.
- CORS is enabled in the backend for `http://localhost:5173`.

---

## 📚 API Endpoints

### 1. Welcome Endpoint

- **URL:** `GET /`
- **Example:** `http://localhost:5000/`
- **Response:**
  ```json
  {
    "message": "Welcome to the Prime Number API!"
  }
  ```

### 2. Prime Check Endpoint

- **URL:** `GET /is_Prime?number=<number>`
- **Example:** `http://localhost:5000/is_Prime?number=7`
- **Query Parameters:**
  - `number` (required): Integer to check for primality

- **Success Response:**
  ```json
  {
    "number": 7,
    "is_Prime": true
  }
  ```

- **Error Responses:**
  - Missing parameter:
    ```json
    {
      "error": "Missing required query parameter 'number'"
    }
    ```
  - Invalid parameter:
    ```json
    {
      "error": "Query parameter 'number' must be an integer"
    }
    ```

---

## 🏃 How to Run the Entire Project

1. **Start the backend:**
   ```sh
   cd backend
   python app.py
   ```

2. **Start the frontend (in a new terminal):**
   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and go to [http://localhost:5173](http://localhost:5173) to use the app.

---

## 📝 Notes

- The backend only checks for primality and returns a boolean.
- The frontend provides a user-friendly interface and displays the result.
- You can extend the backend to return factors or other information as needed.

---

## 🛠️ Troubleshooting

- If you get CORS errors, ensure both servers are running on the correct ports and the backend CORS configuration matches the frontend URL.
- If the frontend cannot connect to the backend, check the `VITE_API_URL` in `frontend/.env`.

---

