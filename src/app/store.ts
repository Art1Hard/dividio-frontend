import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@src/features/auth/services/auth.api";
import { authReducer } from "@src/entities/auth/model/auth.slice";
import { userApi } from "@src/entities/user/services/user.api";
import BaseApi from "@src/entities/auth/services/baseapi";
import { themeReducer } from "@src/features/theme/model/theme.slice";

export const store = configureStore({
	reducer: {
		[BaseApi.reducerPath]: BaseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(BaseApi.middleware)
			.concat(authApi.middleware)
			.concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
