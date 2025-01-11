import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

// 初期状態
const initialState = {
  isSignIn: cookie.get("token") !== undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // サインイン状態
    signIn: (state) => {
      state.isSignIn = true;
    },
    // サインアウト状態
    signOut: (state) => {
      state.isSignIn = false;
      //tokenの削除
      cookie.remove("token");
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;