import {
  ADD_TASK_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  GET_TASKS_STARTED,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  UPDATE_TASK_STARTED,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "../constants";

// Helper to get tasks from localStorage
const getLocalTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

// Helper to save tasks to localStorage
const saveLocalTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasks = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_TASKS_STARTED,
        payload: [],
      });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = getLocalTasks();

      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TASKS_FAILURE,
        payload: [],
      });
      throw error;
    }
  };
};

export const addTask = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_TASK_STARTED,
        payload: [],
      });

      await new Promise(resolve => setTimeout(resolve, 500));
      const tasks = getLocalTasks();
      tasks.push(payload);
      saveLocalTasks(tasks);

      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: ADD_TASK_FAILURE,
        payload: [],
      });
      throw error;
    }
  };
};

export const deleteTask = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_TASK_STARTED,
        payload: [],
      });

      await new Promise(resolve => setTimeout(resolve, 500));
      let tasks = getLocalTasks();
      tasks = tasks.filter(task => task.id !== payload);
      saveLocalTasks(tasks);

      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: DELETE_TASK_FAILURE,
        payload: [],
      });
      throw error;
    }
  };
};

export const updateTask = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_TASK_STARTED,
        payload: [],
      });

      await new Promise(resolve => setTimeout(resolve, 500));
      let tasks = getLocalTasks();
      tasks = tasks.map(task => task.id === payload.id ? payload : task);
      saveLocalTasks(tasks);

      dispatch({
        type: UPDATE_TASK_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TASK_FAILURE,
        payload: [],
      });
      throw error;
    }
  };
};
