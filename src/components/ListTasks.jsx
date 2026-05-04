import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, deleteTask } from "../actions";
import { updateTask } from "../actions/tasksActions";
import { UpdateTaskModal } from "./UpdateTaskModal";
import { FILTERS } from "../constants";

export const ListTasks = ({ activeFilter, setActiveFilter }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const handleDeleteTask = (task) => {
    try {
      dispatch(deleteTask(task.id));
      toast.success("Task deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToggleComplete = (task) => {
    try {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };
      dispatch(updateTask(updatedTask));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdate = (task) => {
    setSelectedTask(task);
    setShowUpdateTaskModal(true);
  };

  const onClose = () => {
    setShowUpdateTaskModal(false);
  };

  const tasksListSelector = useSelector((state) => state.tasks.tasksList);

  // Apply filter
  const filteredTasks = tasksListSelector.filter((task) => {
    if (activeFilter === FILTERS.ACTIVE) return !task.isCompleted;
    if (activeFilter === FILTERS.COMPLETED) return task.isCompleted;
    return true;
  });

  const getAccentClass = (priority) => {
    switch (priority) {
      case "high": return "task-row__accent--urgent";
      case "low": return "task-row__accent--low";
      default: return "task-row__accent--primary";
    }
  };

  const getBadgeClass = (priority) => {
    switch (priority) {
      case "high": return "task-row__badge--high";
      case "low": return "task-row__badge--low";
      default: return "task-row__badge--medium";
    }
  };

  const getBadgeLabel = (priority) => {
    switch (priority) {
      case "high": return "High";
      case "low": return "Low";
      default: return "Medium";
    }
  };

  return (
    <section className="task-section" id="task-list-section">
      {/* Section header + filters */}
      <div className="filter-tabs" id="filter-bar">
        {Object.values(FILTERS).map((filter) => (
          <button
            key={filter}
            className={`filter-tab ${activeFilter === filter ? "filter-tab--active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            id={`filter-${filter}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <h2 className="task-section__header">
        {activeFilter === FILTERS.ALL ? "Priority" : activeFilter === FILTERS.ACTIVE ? "Active" : "Done"}
      </h2>

      {/* Task list */}
      <div className="task-list" id="task-list">
        {filteredTasks.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__icon">
              <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                {activeFilter === FILTERS.COMPLETED ? "task_alt" : "inbox"}
              </span>
            </div>
            <p className="empty-state__text">
              {activeFilter === FILTERS.COMPLETED
                ? "No completed tasks yet"
                : activeFilter === FILTERS.ACTIVE
                ? "All caught up!"
                : "No tasks yet"}
            </p>
            <p className="empty-state__hint">
              {activeFilter === FILTERS.ALL && "Add your first task above"}
            </p>
          </div>
        )}

        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-row ${task.isCompleted ? "task-row--completed" : ""}`}
            id={`task-row-${task.id}`}
          >
            {/* Left accent bar */}
            <div className={`task-row__accent ${getAccentClass(task.priority)}`}></div>

            {/* Checkbox */}
            <input
              type="checkbox"
              className="task-row__checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleComplete(task)}
              id={`task-toggle-${task.id}`}
            />

            {/* Content */}
            <div className="task-row__content">
              <p className="task-row__title">{task.title}</p>
            </div>

            {/* Trailing: badge + actions */}
            <div className="task-row__trailing">
              {task.priority && !task.isCompleted && (
                <span className={`task-row__badge ${getBadgeClass(task.priority)}`}>
                  {getBadgeLabel(task.priority)}
                </span>
              )}
              {!task.isCompleted && (
                <button
                  className="task-row__action"
                  onClick={() => handleUpdate(task)}
                  title="Edit task"
                  id={`task-edit-${task.id}`}
                >
                  <span className="material-symbols-outlined">edit</span>
                </button>
              )}
              <button
                className="task-row__action task-row__action--delete"
                onClick={() => handleDeleteTask(task)}
                title="Delete task"
                id={`task-delete-${task.id}`}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {showUpdateTaskModal && (
        <UpdateTaskModal
          show={showUpdateTaskModal}
          onClose={onClose}
          task={selectedTask}
        />
      )}
    </section>
  );
};
