# 📝 Think Board — Notes Taking App

> **A sleek and simple MERN Stack notes app** for capturing, editing, and managing your thoughts with style and speed.  
> Built with **MongoDB, Express.js, React, Node.js, Tailwind CSS** and powered by **Upstash Redis Rate Limiting** for security.

LIVE DEMO:-https://mern-thinkboard-yjfv.onrender.com

---

## 🚀 Features

- 📌 **Create, Edit & Delete Notes** — Organize your thoughts effortlessly.
- 📱 **Responsive UI** — Works seamlessly across mobile, tablet, and desktop.
- 🎨 **Modern Design** — Tailwind CSS styling for a clean and minimal look.
- ⚡ **Fast Performance** — Optimized MongoDB queries and caching.
- 🔐 **Security** — Rate limiting with Upstash Redis to prevent abuse.
- ⚙️ **REST API** — Fully functional CRUD endpoints (GET, POST, PUT, DELETE).
- ❌ **Empty State Handling** — Beautiful “Notes Not Found” page with a quick-create option.

---

## 🛠 Tech Stack

| Category       | Technologies Used |
|----------------|-------------------|
| **Frontend**   | React, Tailwind CSS, React Router |
| **Backend**    | Express.js, Node.js |
| **Database**   | MongoDB (Mongoose ODM) |
| **Caching & Rate Limiting** | Upstash Redis |
| **Others**     | Dotenv, Axios, ESLint |

---

## 📂 Folder Structure

```plaintext
ThinkBoard/
│
├── backend/
│   ├── controllers/   # API logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express route definitions
│   ├── middleware/    # Rate limiter, error handler
│   ├── config/        # DB & Redis config
│   ├── src/           # Entry point
│   ├── .env           # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/ # Navbar, NoteCard, EmptyState
│   │   ├── pages/      # Home, Notes, CreateNote
│   │   ├── routes/     # Page routing
│   │   └── styles/     # Tailwind CSS
│   └── package.json
│
└── README.md
⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/notes	Fetch all notes
POST	/api/notes	Create a new note
PUT	/api/notes/:id	Update an existing note
DELETE	/api/notes/:id	Delete a note

🔐 Rate Limiting with Upstash Redis
javascript
Copy
Edit
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});
Limits clients to 10 requests / 10 seconds.

Protects against brute force & abuse.

🎨 UI Previews
Home Page

Note Card

Empty State

🏎 Performance
Optimized DB queries with Mongoose lean().

Minimal client re-renders with React hooks.

Lazy loading of components for faster initial load.

🛡 Security
Rate limiting to prevent API spam.

Environment variables for sensitive data (.env ignored in .gitignore).

CORS policy for API access control.

⚠️ Error Handling
Unified error middleware in Express.

Clear HTTP status codes & JSON error messages.

Graceful empty state handling in UI.

🧑‍💻 Setup & Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/think-board.git
cd think-board

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Start backend
cd ../backend
npm run dev

# Start frontend
cd ../frontend
npm start
📜 License
MIT License © 2025 Samuel Rodrigues

💡 Pro Tip
Use Upstash Redis Dashboard to monitor rate limit logs and tweak rules in real-time.
