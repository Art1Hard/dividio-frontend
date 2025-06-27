import { createSlice } from "@reduxjs/toolkit";
import type { Theme } from "./theme.type";

interface ThemeState {
	currentTheme: Theme;
}

const initialState: ThemeState = {
	currentTheme: (localStorage.getItem("theme") as Theme) || "light",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.currentTheme = action.payload;
		},
		toggleTheme: (state) => {
			state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.currentTheme);
		},
	},
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
