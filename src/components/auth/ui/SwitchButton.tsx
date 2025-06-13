import cn from "clsx";
import type { FC } from "react";

interface SwitchButtonProps {
	onClickSwitchForm: () => void;
	className?: string;
	classNameInner?: string;
	prefix?: string;
	children: string;
}

const SwitchButton: FC<SwitchButtonProps> = ({
	onClickSwitchForm,
	className,
	classNameInner,
	prefix,
	children,
}) => {
	return (
		<p className={cn("mt-6 text-center text-sm text-slate-400", className)}>
			{prefix}{" "}
			<button
				type="button"
				onClick={onClickSwitchForm}
				className={cn("text-blue-400 hover:underline", classNameInner)}>
				{children}
			</button>
		</p>
	);
};

export default SwitchButton;
