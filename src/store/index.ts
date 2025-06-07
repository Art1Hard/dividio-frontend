import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@store/auth/auth.api";
import { authReducer } from "@store/auth/auth.slice";
import { userApi } from "./user/user.api";
import { incomeApi } from "./income/income.api";
import { allocationApi } from "./allocation/allocation.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[incomeApi.reducerPath]: incomeApi.reducer,
		[allocationApi.reducerPath]: allocationApi.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(userApi.middleware)
			.concat(incomeApi.middleware)
			.concat(allocationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
