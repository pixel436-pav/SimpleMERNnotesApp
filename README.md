# SimpleMERNnotesApp
# Simple MERN Notes App

A beginner-friendly notes application built with MongoDB, Express, React, and Node.js. This is your first real MERN project - keep it simple!

## What This App Does

-  Create notes (title + content)
-  Display all notes
-  Delete notes
-  NO authentication (not yet!)
-  NO fancy features (keep it simple!)

## Project Structure

```
mern-notes-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── api.js         # Axios calls to backend
│   │   └── main.jsx       # Entry point
│   └── package.json
│
├── server/                 # Node + Express backend
│   ├── models/
│   │   └── Note.js        # Mongoose schema
│   ├── routes/
│   │   └── noteRoutes.js  # API routes
│   ├── server.js          # Express setup
│   └── package.json
│
└── README.md              # You are here!
```

## Tech Stack

**Frontend:**
- React (with Vite)
- Axios (for API calls)
- Basic CSS (no frameworks needed)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

Make sure you have these installed:
- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas account)
- A code editor (VS Code recommended)

### Installation

**Step 1: Clone or create this project**
```bash
mkdir mern-notes-app
cd mern-notes-app
```

**Step 2: Set up the BACKEND first**
```bash
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

**Step 3: Set up the FRONTEND**
```bash
cd ..
npm create vite@latest client -- --template react
cd client
npm install
npm install axios
```

### Running the App

**Terminal 1 - Start MongoDB** (if running locally)
```bash
mongod
```

**Terminal 2 - Start Backend**
```bash
cd server
npm run dev
```
Backend runs on: `http://localhost:5000`

**Terminal 3 - Start Frontend**
```bash
cd client
npm run dev
```
Frontend runs on: `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| DELETE | `/api/notes/:id` | Delete a note by ID |

## Environment Variables

Create a `.env` file in the `server/` folder:

```
MONGODB_URI=mongodb://localhost:27017/notesapp
PORT=5000
```

## How It Works (The Flow)

1. **User types note in React form** → clicks "Add Note"
2. **React sends POST request** → to Express backend
3. **Express route receives data** → saves to MongoDB using Mongoose
4. **MongoDB saves the note** → sends success response back
5. **React receives response** → updates state and displays new note

## Common Issues & Solutions

**Problem:** Can't connect to MongoDB
- **Solution:** Make sure MongoDB is running (`mongod` command)

**Problem:** CORS errors
- **Solution:** Make sure you installed and configured `cors` in server.js

**Problem:** "Cannot GET /api/notes"
- **Solution:** Check that your routes are properly connected in server.js

**Problem:** React can't fetch data
- **Solution:** Check that backend is running on port 5000

## What to Build Next

Once you finish this project:
1. ✅ Add an "Edit Note" feature
2. ✅ Add timestamps (createdAt, updatedAt)
3. ✅ Add search/filter functionality
4. ✅ Add categories or tags
5. ✅ Deploy to Heroku (backend) and Vercel (frontend)

**THEN** (and only then):
- Add user authentication (JWT)
- Add user accounts (each user sees only their notes)

## Learning Resources

- [Express Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [React Docs](https://react.dev/)
- [MongoDB Docs](https://www.mongodb.com/docs/)

## Your Progress Tracker

- [ ] Day 1: Backend - Express server running, returns "Hello World"
- [ ] Day 2: Backend - MongoDB connected, Note model created
- [ ] Day 3: Backend - All 3 routes working (GET, POST, DELETE)
- [ ] Day 4: Frontend - React app displays hardcoded notes
- [ ] Day 5: Frontend - Connected to backend, fetches real notes
- [ ] Day 6: Frontend - Form to create notes works
- [ ] Day 7: Frontend - Delete button works
- [ ] Day 8: Polish - Clean up code, add basic styling
- [ ] Day 9: Test everything, fix bugs
- [ ] Day 10: CELEBRATE! You built your first MERN app! 🎉

## Remember

- **This is your FIRST real project** - it's supposed to be simple
- **Getting stuck is normal** - that's where learning happens
- **Don't compare to fancy projects** - everyone starts here
- **Finish it before adding features** - resist the urge to make it complex

## License

This is a learning project. Do whatever you want with it!

---

**Built by:** [Your Name]  
**Date Started:** [Today's Date]  
**Date Completed:** [Fill this in when you finish!]

**Notes to self:**
- I will not give up
- I will Google errors before panicking
- I will finish this project before starting another one
- I've got this! 💪