/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useThunks } from "@hooks/redux/thunks";

export const useAuthInit = () => {
	const { initAuth } = useThunks();
	useEffect(() => {
		initAuth();
	}, []);
};
