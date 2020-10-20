import authApi from "../../api/auth";

// namespace
export const namespace = "auth";

// constant
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// initialState
const initialState = {
  isRequest: false,
  isAuthenticated: false,
};

// reducer
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {isRequest: true});
    
    case LOGIN_SUCCESS: 
      return Object.assign({}, state, {
        isRequest: false,
        isAuthenticated: true,
        user: action.payload
      });

    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isRequest: false,
        isAuthenticated: false,
        errorMsg: action.payload
      });
    
    default:
      return state;
  }
};

// action creator
export const login = (form) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  authApi(form).then(response => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response
    }).catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error
      })
    });
  })
};

// selector
export const getAuth = state => state[namespace]; 