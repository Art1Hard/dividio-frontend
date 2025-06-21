import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActions } from "@src/features/auth/auth.slice";
import { themeActions } from "@src/features/theme/theme.slice";

const actions = {
	...authActions,
	...themeActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
