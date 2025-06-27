import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@src/features/auth/services/auth.api";
import { authReducer } from "@src/features/auth/model/auth.slice";
import { userApi } from "@src/features/user/services/user.api";
import authBaseApi from "@src/features/auth/services/auth.baseapi";
import { themeReducer } from "@src/features/theme/model/theme.slice";

export const store = configureStore({
	reducer: {
		[authBaseApi.reducerPath]: authBaseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authBaseApi.middleware)
			.concat(authApi.middleware)
			.concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
