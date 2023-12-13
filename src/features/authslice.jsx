import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  userData: {},
  isloggedIn: false,
  isLoading: false,
  token: "",
  userEdited: false,
  Errorr: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isloggedIn = true;
      state.isLoading = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isloggedIn = false;
      state.token = null;
    },
    tokenStore: (state, action) => {
      state.token = action.payload;
    },
    Errorr: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login, tokenStore, startLoading, endLoading, Errorr } =
  authSlice.actions;

export default authSlice.reducer;

export const LoginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post(
      "https://afriroot.onrender.com/auth/login/",
      data
    );
  console.log(response)
   
  // dispatch(login(response.data.user_data));
    // console.log(response.data, 'this is data')
    // localStorage.setItem("logindata", JSON.stringify(response.data));

    localStorage.setItem("token", response.token);

    dispatch(tokenStore(response.token));
    dispatch(endLoading());

    navigate("/courses");
  } catch (err) {
    dispatch(endLoading());
    const error_message = "Invalid credentials";
    console.log(err, "error");
    toast.error(error_message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};


export const LogoutUser = (history) => (dispatch) => {
  localStorage.removeItem("logindata");
  localStorage.removeItem("token");
  dispatch(logout(""));
  history.push("/");
};
