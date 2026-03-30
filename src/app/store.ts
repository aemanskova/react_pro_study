import { tasksApi } from "@entities/task";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@shared/api/auth";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware).concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
