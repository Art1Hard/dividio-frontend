import { useInitAuth } from "@src/features/auth/hooks/useInitAuth";
import { type JSX } from "react";

const GuardProvider = ({ children }: { children: JSX.Element }) => {
	useInitAuth();
	return children;
};

export default GuardProvider;
