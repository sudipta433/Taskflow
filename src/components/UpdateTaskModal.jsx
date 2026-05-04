import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateTask } from "../actions/tasksActions";
import { PRIORITY } from "../constants";

export const UpdateTaskModal = ({ show, onClose, task }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("priority", task.priority || PRIORITY.MEDIUM);
      setIsCompleted(task.isCompleted);
    }
  }, [task, setValue]);

  const onSubmit = (data) => {
    try {
      const updatedTask = {
        ...task,
        title: data.title,
        priority: data.priority,
        isCompleted: isCompleted,
      };

      dispatch(updateTask(updatedTask));
      onClose();
      toast.success("Task updated");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      id="update-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel" id="update-modal-panel">
        <div className="modal-panel__header">
          <h2 className="modal-panel__title">Edit Task</h2>
          <button
            className="modal-panel__close"
            onClick={onClose}
            id="update-modal-close"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
          </button>
        </div>
        <div className="modal-panel__body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="edit-title" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                className="form-input"
                id="edit-title"
                autoComplete="off"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="form-error">Title is required</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="edit-priority" className="form-label">
                Priority
              </label>
              <select
                className="form-select"
                id="edit-priority"
                {...register("priority")}
              >
                <option value={PRIORITY.LOW}>Low</option>
                <option value={PRIORITY.MEDIUM}>Medium</option>
                <option value={PRIORITY.HIGH}>High</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-option ${!isCompleted ? "toggle-option--active" : ""}`}
                  onClick={() => setIsCompleted(false)}
                  id="toggle-pending"
                >
                  Pending
                </button>
                <button
                  type="button"
                  className={`toggle-option toggle-option--done ${isCompleted ? "toggle-option--active" : ""}`}
                  onClick={() => setIsCompleted(true)}
                  id="toggle-completed"
                >
                  Completed
                </button>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn--ghost"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn--primary"
                id="update-task-btn"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
