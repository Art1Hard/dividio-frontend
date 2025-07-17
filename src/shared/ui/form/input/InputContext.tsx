// InputContext.ts
import { createContext, useContext } from "react";
import type { FieldError } from "react-hook-form";

export const InputContext = createContext<{
	id: string;
	error?: FieldError;
} | null>(null);

export const useInputContext = () => {
	const ctx = useContext(InputContext);
	if (!ctx)
		throw new Error("Input.* components must be used inside <InputGroup>");
	return ctx;
};
