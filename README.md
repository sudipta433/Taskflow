<div align="center">
  <h1>Taskflow</h1>
  <p>A beautiful, minimal, and highly functional task manager built with React and Redux.</p>

  [![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-6750a4?style=for-the-badge&logo=github)](https://sudipta433.github.io/Taskflow/)
</div>

<br />

Taskflow is designed with a **Material Design 3** inspired dark palette for a clean, professional, and distraction-free look. All tasks are saved locally to your browser, so you can start organizing your day immediately without any setup.

## ✨ Features

- **Prioritize Your Day**: Add tasks with priority levels (Low, Medium, High).
- **Edit & Refine**: Update task titles, priorities, and completion status via a sleek modal.
- **Quick Toggles**: Click the circular checkbox to mark tasks as done or pending instantly.
- **Smart Filtering**: Easily filter your view to show All, Active, or Completed tasks.
- **Live Statistics**: Keep track of your progress with live Completed, Pending, and Efficiency metrics.
- **Visual Cues**: Color-coded priority badges and hover accent bars make scanning your list effortless.
- **Persistent Storage**: Uses `localStorage` to save your tasks, keeping them safe between sessions without needing a backend.

## 🚀 Live Demo

**[Try Taskflow Here](https://sudipta433.github.io/Taskflow/)**

## 🛠️ Tech Stack

- **Framework**: React 18
- **State Management**: Redux + Redux Thunk
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Styling**: Pure CSS (Custom M3 Dark Theme)
- **Deployment**: GitHub Actions + GitHub Pages

## 💻 Running Locally

Since the app uses `localStorage`, you don't need to run a backend server. Just start the frontend!

### 1. Clone the repository
```bash
git clone https://github.com/sudipta433/Taskflow.git
cd Taskflow
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📂 Project Structure

```text
src/
├── actions/          # Redux action creators (async thunks)
├── components/       # React components
│   ├── Navbar.jsx        # Top navigation bar
│   ├── Header.jsx        # Page header with live stats
│   ├── AddTask.jsx       # Command-line style task input
│   ├── ListTasks.jsx     # Task list with filters & hover states
│   ├── UpdateTaskModal.jsx  # Edit task modal
│   └── Loader.jsx        # Top loading progress bar
├── reducers/         # Redux reducers
├── store/            # Redux store configuration
├── constants.js      # Action types + priority/filter enums
├── App.jsx           # Root component
├── App.css           # App-level overrides
├── index.css         # Global styles (M3 dark theme system)
└── main.jsx          # Entry point
```

## 📄 License

MIT License
