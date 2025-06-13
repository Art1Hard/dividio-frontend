import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { initAuth, logout } from "@store/auth/auth.thunks";

const actions = {
	logout,
	initAuth,
};

export const useThunks = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
