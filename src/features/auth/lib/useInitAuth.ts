/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useThunks } from "@src/shared/lib/hooks/redux/thunks";

export const useInitAuth = () => {
	const { initAuth } = useThunks();

	useEffect(() => {
		initAuth();
	}, []);
};
