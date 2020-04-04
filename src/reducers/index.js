import { combineReducers } from 'redux'

import { FETCH_USERS, FETCH_USER, LOGIN, LOGOUT } from '../actions/types'



const authReducer = (state={}, action)=>{
  switch(action.type){
    case LOGIN :
      return action.payload
    
    case LOGOUT :
      return action.payload

    default:
      return state  
  }
}

const usersReducer =(state=[], action)=>{
  switch(action.type){
    case FETCH_USERS :      
      return action.payload

    case FETCH_USER:
      return action.payload

    default:
      return state  
  }
}

export default combineReducers({
  auth: authReducer,
  users: usersReducer
})