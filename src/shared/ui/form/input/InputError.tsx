import type { HTMLAttributes } from "react";
import { useInputContext } from "./InputContext";

const InputError = ({ ...props }: HTMLAttributes<HTMLParagraphElement>) => {
	const { error } = useInputContext();
	if (error && error.message) {
		return (
			<p className="text-[14px] text-red-600 dark:text-red-500" {...props}>
				{error.message}
			</p>
		);
	}
};

export default InputError;
