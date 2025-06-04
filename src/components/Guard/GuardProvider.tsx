import { useAuthInit } from "@src/hooks/useInitAuth";
import { type JSX } from "react";

const GuardProvider = ({ children }: { children: JSX.Element }) => {
	useAuthInit();
	return children;
};

export default GuardProvider;
