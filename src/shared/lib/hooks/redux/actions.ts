import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActions } from "@src/entities/auth/model/auth.slice";
import { themeActions } from "@src/features/theme/model/theme.slice";

const actions = {
	...authActions,
	...themeActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
