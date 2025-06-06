import { useInitAuth } from "@src/hooks/auth/useInitAuth";
import { type JSX } from "react";

const GuardProvider = ({ children }: { children: JSX.Element }) => {
	useInitAuth();
	return children;
};

export default GuardProvider;
