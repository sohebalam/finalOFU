import { AUTH, LOGOUT } from "../constants/actionTypes"

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
      return { ...state, authData: action?.data }
    case LOGOUT:
      localStorage.clear()
      return { ...state, authData: null }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (
    action.type
    // case USER_LOGIN_REQUEST:
    //   return { loading: true }
    // case USER_LOGIN_SUCCESS:
    //   return { loading: false, userInfo: action.payload }
    // case USER_LOGIN_FAIL:
    //   return { loading: false, error: action.payload }
    // case USER_LOGOUT:
    //   return {}
    // default:
    //   return state
  ) {
  }
}
export const userRegisterReducer = (state = {}, action) => {
  switch (
    action.type
    // case USER_REGISTER_REQUEST:
    //   return { loading: true }
    // case USER_REGISTER_SUCCESS:
    //   return { loading: false, userInfo: action.payload }
    // case USER_REGISTER_FAIL:
    //   return { loading: false, error: action.payload }

    // default:
    //   return state
  ) {
  }
}
