import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../actions/tasksActions";
import { PRIORITY } from "../constants";

export const AddTask = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: PRIORITY.MEDIUM,
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        id: uuidv4(),
        isCompleted: false,
        createdAt: new Date().toISOString(),
      };
      await dispatch(addTask(payload));
      reset();
      toast.success("Task added");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="command-input" id="add-task-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="command-input__wrapper">
          <span className="material-symbols-outlined command-input__icon">add</span>
          <input
            type="text"
            className="command-input__field"
            placeholder="Add a new task..."
            autoComplete="off"
            id="task-input"
            {...register("title", { required: true })}
          />
          <select
            className="command-input__priority"
            id="priority-select"
            {...register("priority")}
          >
            <option value={PRIORITY.LOW}>Low</option>
            <option value={PRIORITY.MEDIUM}>Medium</option>
            <option value={PRIORITY.HIGH}>High</option>
          </select>
          <button type="submit" className="command-input__submit" id="add-task-btn">
            Return ↵
          </button>
        </div>
        {errors && errors.title && (
          <p className="command-input__error">Task name is required</p>
        )}
      </form>
    </section>
  );
};
