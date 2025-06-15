import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@store/auth/auth.api";
import { authReducer } from "@store/auth/auth.slice";
import { userApi } from "@store/user/user.api";
import authBaseApi from "@src/store/auth/auth.baseapi";

export const store = configureStore({
	reducer: {
		[authBaseApi.reducerPath]: authBaseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authBaseApi.middleware)
			.concat(authApi.middleware)
			.concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
