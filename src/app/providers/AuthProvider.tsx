import { useInitAuth } from "@src/features/auth/lib/useInitAuth";
import { type JSX } from "react";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
	useInitAuth();
	return children;
};

export default AuthProvider;
