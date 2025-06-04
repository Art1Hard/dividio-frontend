import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@store/auth/auth.api";
import { authReducer } from "@store/auth/auth.slice";
import { userApi } from "./user/user.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
