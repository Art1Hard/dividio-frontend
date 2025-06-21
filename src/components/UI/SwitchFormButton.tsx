import cn from "clsx";
import type { FC } from "react";

interface SwitchButtonProps {
	onClickSwitchForm: () => void;
	className?: string;
	classNameInner?: string;
	prefix?: string;
	children: string;
}

const SwitchFormButton: FC<SwitchButtonProps> = ({
	onClickSwitchForm,
	className,
	classNameInner,
	prefix,
	children,
}) => {
	return (
		<p
			className={cn(
				"mt-6 text-center text-sm text-slate-700 dark:text-slate-400",
				className
			)}>
			{prefix}{" "}
			<button
				type="button"
				onClick={onClickSwitchForm}
				className={cn(
					"text-blue-600 dark:text-blue-400 hover:underline",
					classNameInner
				)}>
				{children}
			</button>
		</p>
	);
};

export default SwitchFormButton;
