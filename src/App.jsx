import { useState } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { AddTask } from "./components/AddTask";
import { Loader } from "./components/Loader";
import { FILTERS } from "./constants";

function App() {
  const loaderSelector = useSelector((state) => state.tasks.loader);
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#2b292f',
            color: '#e6e0e9',
            border: '0.5px solid rgba(230, 224, 233, 0.05)',
            borderRadius: '2px',
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.01em',
          },
          success: {
            iconTheme: { primary: '#cfbcff', secondary: '#141218' },
          },
          error: {
            iconTheme: { primary: '#ffb4ab', secondary: '#141218' },
          },
        }}
      />
      {loaderSelector && <Loader />}
      <Navbar />
      <main className="main-canvas">
        <Header />
        <AddTask />
        <ListTasks activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </main>
    </>
  );
}

export default App;
