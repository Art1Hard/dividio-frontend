import { useId, type HTMLAttributes } from "react";
import { InputContext } from "./InputContext";
import cn from "clsx";
import type { FieldError } from "react-hook-form";

interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
	error?: FieldError;
}

const InputGroup = ({
	children,
	className,
	error,
	...props
}: InputGroupProps) => {
	const id = useId();
	return (
		<div className={cn("relative space-y-1", className)} {...props}>
			<InputContext.Provider value={{ id, error }}>
				{children}
			</InputContext.Provider>
		</div>
	);
};

export default InputGroup;
