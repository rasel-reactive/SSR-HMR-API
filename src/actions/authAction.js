import axios from "axios";
import { LOGIN, LOGOUT, SIGN_UP } from "./types";

// Register Api Call........
export const register = (userData, history) => async (dispatch,  getState, api) => {
  try {
    const { data } = await api.post("/auth/register", { ...userData });
    history.push("/login");
    dispatch({
      type: SIGN_UP
    });

  } catch (ex) {
    console.log(ex);
  }
};

//~ login action.......
export const login = userData => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/auth/login", { ...userData });
    if (!data) return;
    console.log(data);

    const payload = {
      avatar: data.avatar,
      username: data.username,
      userId: data._id,
      email: data.email
    };

    dispatch({
      type: LOGIN,
      payload: payload
    });
  } catch(ex){
    console.log(ex);
  }
};


//~ auto login when componopentDidMount ==> client site
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get("/auth/current-user");
    // console.log(res);
    let  data = res.data
    console.log("currentUser : ", data);
   
      
    if (!data) return;
    const payload = {
      username: data.username,
      userId: data._id,
      email: data.email,
      avatar: data.avatar
    };
    dispatch({
      type: LOGIN,
      payload: payload
    });

  } catch (ex) {
    console.log(ex);
  }
};


export const logout = () => async (dispatch, getState, api) => {
  const res =   await api.get("/auth/logout");
  if(res.status === 200){
    dispatch({
      type: LOGOUT,
      payload: {}
    });
  }
};
