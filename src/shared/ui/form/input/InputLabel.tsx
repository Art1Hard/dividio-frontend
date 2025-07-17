import type { LabelHTMLAttributes } from "react";
import { useInputContext } from "./InputContext";

const InputLabel = ({
	children,
	...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
	const { id } = useInputContext();

	return (
		<label
			htmlFor={id}
			className="cursor-pointer block text-sm font-medium text-slate-800 dark:text-slate-300"
			{...props}>
			{children}
		</label>
	);
};

export default InputLabel;
