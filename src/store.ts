import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import isLoginSlice from "./stores/user/login-slice"

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;