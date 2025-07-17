import { useState, type InputHTMLAttributes } from "react";
import cn from "clsx";
import {
	EyeClosedIcon,
	EyeOpenIcon,
} from "@src/features/auth/ui/icons/EyeIcons";
import { useInputContext } from "./InputContext";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	hasShowIcon?: boolean;
	rootClassName?: string;
}

const Input = ({
	hasShowIcon,
	rootClassName,
	type = "text",
	className,
	...props
}: InputProps) => {
	const { id, error } = useInputContext();
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div className={cn("relative", rootClassName)}>
			<input
				type={
					type === "password" ? (isShowPassword ? "text" : "password") : type
				}
				id={id && id}
				className={cn(
					"w-full px-4 py-2 rounded-lg bg-slate-300/50 dark:bg-slate-700/50 dark:text-white border focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 placeholder:text-slate-500 dark:placeholder:text-slate-400",
					error
						? "border-red-600 dark:border-red-500"
						: "border-slate-400 dark:border-slate-600",
					className
				)}
				{...props}
			/>

			{type === "password" && hasShowIcon && (
				<button
					onClick={() => setIsShowPassword((prev) => !prev)}
					type="button"
					className="absolute right-3 top-[50%] translate-y-[-50%] text-slate-700 hover:text-black dark:text-slate-400 dark:hover:text-white"
					aria-label="Показать или скрыть пароль">
					{!isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
				</button>
			)}
		</div>
	);
};

Input.displayName = "Input";

export default Input;
