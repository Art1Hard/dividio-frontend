/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useThunks } from "@src/shared/lib/hooks/redux/thunks";
import { useAppSelector } from "@src/shared/lib/hooks/redux";

export const useInitAuth = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const { initAuth } = useThunks();

	useEffect(() => {
		initAuth();
	}, []);

	useEffect(() => {
		if (!isAuthenticated) return;

		const interval = setInterval(() => {
			initAuth();
			console.log("Проверка токена по таймеру прошла успешно");
		}, 50 * 60 * 1000); // каждые 50 минут

		return () => clearInterval(interval);
	}, [isAuthenticated]);
};
