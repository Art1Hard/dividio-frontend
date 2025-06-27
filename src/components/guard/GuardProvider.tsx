import { useInitAuth } from "@src/features/auth/lib/useInitAuth";
import { type JSX } from "react";

const GuardProvider = ({ children }: { children: JSX.Element }) => {
	useInitAuth();
	return children;
};

export default GuardProvider;
