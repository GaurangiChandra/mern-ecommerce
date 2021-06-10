import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
  } from "../constants/userConstants";





  export const userLoginReducer = (state = { }, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true};
      case USER_LOGIN_SUCCESS:
        // loading is false here because during the "request" case the loading is already completed.
        return { loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
        case USER_LOGOUT:
        {
            return{}
        }
      default:
        return state;
    }
  };


  export const userRegisterReducer = (state = { }, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true};
      case USER_REGISTER_SUCCESS:
        // loading is false here because during the "request" case the loading is already completed.
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
        case USER_LOGOUT:
        {
            return{}
        }
      default:
        return state;
    }
  };


  export const userDetailsReducer = (state = { }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true};
      case USER_DETAILS_SUCCESS:
        // loading is false here because during the "request" case the loading is already completed.
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
        case USER_LOGOUT:
        {
            return{}
        }
      default:
        return state;
    }
  };