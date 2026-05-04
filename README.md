# Taskflow — Task Manager App

A minimal, dark-themed task manager built with **React**, **Redux**, and **JSON Server**. Designed with a Material Design 3 inspired dark palette for a clean, professional look.

## Features

- **Add tasks** with priority levels (Low, Medium, High)
- **Edit tasks** — update title, priority, and completion status via modal
- **Delete tasks** with one click
- **Toggle completion** — click the circular checkbox to mark done/pending
- **Filter tasks** — view All, Active, or Completed tasks
- **Live stats** — see Completed count, Pending count, and Efficiency %
- **Priority badges** — color-coded labels (High, Medium, Low) on hover
- **Hover interactions** — accent bar + action buttons appear on row hover
- **Persistent storage** — tasks are stored via JSON Server REST API

## Tech Stack

- React 18
- Redux + Redux Thunk (async actions)
- React Hook Form (form handling)
- React Hot Toast (notifications)
- Axios (HTTP client)
- JSON Server (mock REST API)
- Vite (build tool)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the API server

```bash
npm run api
```

This starts JSON Server on `http://localhost:3001` serving `db.json`.

### 3. Start the dev server

```bash
npm run dev
```

Open `http://localhost:5173` (or the port shown in terminal).

## Project Structure

```
src/
├── actions/          # Redux action creators (async thunks)
├── components/       # React components
│   ├── Navbar.jsx        # Top navigation bar
│   ├── Header.jsx        # Page header with stats
│   ├── AddTask.jsx       # Command-line style task input
│   ├── ListTasks.jsx     # Task list with filters
│   ├── UpdateTaskModal.jsx  # Edit task modal
│   └── Loader.jsx        # Top loading bar
├── reducers/         # Redux reducers
├── store/            # Redux store configuration
├── constants.js      # Action types + priority/filter enums
├── App.jsx           # Root component
├── App.css           # App-level overrides
├── index.css         # Global styles (M3 dark theme)
└── main.jsx          # Entry point
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Fetch all tasks |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## License

MIT
