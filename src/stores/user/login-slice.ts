import { createSlice,  } from '@reduxjs/toolkit';
import { LOCALSTORAGE_TOKEN } from '../../constants';
import {  RootState } from '../../store';



export interface LoginState {
  value: boolean;
}


const initialState: LoginState = {
  value: !!(localStorage.getItem(LOCALSTORAGE_TOKEN)),
};

export const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    logInRedux: (state) => {
      state.value = true
    },
    logOutRedux: (state) => {
      state.value = false
    },

  },

});

export const { logInRedux, logOutRedux,  } = isLoginSlice.actions;

export const selectIsLogin = (state: RootState) => state.isLogin.value;


export default isLoginSlice.reducer;