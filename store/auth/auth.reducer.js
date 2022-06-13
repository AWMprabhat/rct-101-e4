import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

const token = localStorage.getItem("token");
const initalState = {
  loading: false,
  data: {
    token: token || "",
    isAuthenticated: !!token,
  },
  error: false,
};

export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return { ...initalState, loading: true };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...initalState,
        data: {
          ...payload,
          isAuthenticated: true,
        },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...initalState, error: true };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      return initalState;
    }
    default: {
      return state;
    }
  }
};
