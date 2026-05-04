import axios from "axios";
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

export const getTasks = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_TASKS_STARTED,
        payload: [],
      });

      const result = await axios.get(`http://localhost:3001/tasks`);

      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: GET_TASKS_FAILURE,
        payload,
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

      const result = await axios.post(`http://localhost:3001/tasks`, {
        ...payload,
      });

      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TASK_FAILURE,
        payload,
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

      const result = await axios.delete(
        `http://localhost:3001/tasks/${payload}`
      );

      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: DELETE_TASK_FAILURE,
        payload,
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

      const result = await axios.patch(
        `http://localhost:3001/tasks/${payload.id}`,
        payload
      );

      dispatch({
        type: UPDATE_TASK_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TASK_FAILURE,
        payload,
      });
      throw error;
    }
  };
};
