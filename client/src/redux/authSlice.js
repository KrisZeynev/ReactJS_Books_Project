import { createSlice } from '@reduxjs/toolkit';

const savedAuthData = JSON.parse(localStorage.getItem("authData"));

const initialState = savedAuthData || {
  _id: "",
  email: "",
  accessToken: ""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { _id, email, accessToken } = action.payload;
      state._id = _id;
      state.email = email;
      state.accessToken = accessToken;
      localStorage.setItem("authData", JSON.stringify(action.payload));
    },
    logout(state) {
      state._id = "";
      state.email = "";
      state.accessToken = "";
      localStorage.removeItem("authData");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
