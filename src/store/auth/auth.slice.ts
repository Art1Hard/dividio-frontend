import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	accessToken: string | null;
	isAuthenticated: boolean;
	isCheckingAuth: boolean;
}

const initialState: AuthState = {
	accessToken: null,
	isAuthenticated: false,
	isCheckingAuth: true,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.accessToken = null;
			state.isAuthenticated = false;
		},
		setCheckingAuth: (state, action: PayloadAction<boolean>) => {
			state.isCheckingAuth = action.payload;
		},
	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
