import axios from "axios";

// Action for logging in the user
export const loginUser = (phone) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/login", { phone });
    dispatch({
      type: "USER_SIGNIN_SUCCESS",
      payload: response.data, // The user data returned from the backend
    });
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAIL",
      payload: error.response ? error.response.data : error.message,
    });
  }
};

// Action for registering a new user
export const registerUser = (phone, name) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/register", { phone, name });
    dispatch({
      type: "USER_SIGNIN_SUCCESS",
      payload: response.data, // The user data returned from the backend
    });
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAIL",
      payload: error.response ? error.response.data : error.message,
    });
  }
};
