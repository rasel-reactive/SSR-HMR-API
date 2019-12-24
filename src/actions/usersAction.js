import axios from 'axios'
import { FETCH_USERS, FETCH_USER } from './types'


// Get All User Array
export const fetchUsers = () => async (dispatch, getState, api)=>{
  const { data } = await api.get('/api/users')    
  // const { data } = await axios.get('http://localhost:4000/api/users')    
  dispatch({
    type: FETCH_USERS,
    payload: data
  })
}

// Get Single User Object ......
export const fetchUser = (userId) => async (dispatch, getState, api)=>{
  const { data } = await api.get('/users'+ userId)
  dispatch({
    type: FETCH_USER,
    payload: data
  })
}