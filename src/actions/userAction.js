import axios from "axios";
import { FETCH_USERS, FETCH_USER } from "./types";

// Get All User Array
export const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    const { data } = await api.get("/users");
    console.log(data);
    dispatch({
      type: FETCH_USERS,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }

  
};

// Get Single User Object ......
export const fetchUser = userId => async (dispatch, getState, api) => {
  const { data } = await api.get("/users" + userId);
  dispatch({
    type: FETCH_USER,
    payload: data
  });
};
