import { forwardRef, useState } from "react";
import cn from "clsx";
import type { FieldError } from "react-hook-form";
import {
	EyeClosedIcon,
	EyeOpenIcon,
} from "@src/features/auth/ui/icons/EyeIcons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
	label?: string;
	labelText?: string;
	hasShowIcon?: boolean;
	rootClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			error,
			type,
			label,
			labelText,
			hasShowIcon = false,
			rootClassName,
			...props
		},
		ref
	) => {
		const [isShowPassword, setIsShowPassword] = useState(false);

		return (
			<div className={cn("relative", rootClassName)}>
				{label && (
					<label
						htmlFor={label}
						className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">
						{labelText}
					</label>
				)}
				<input
					ref={ref}
					type={
						type === "password" ? (isShowPassword ? "text" : "password") : type
					}
					id={label}
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
						className="absolute right-3 top-9 text-slate-700 hover:text-black dark:text-slate-400 dark:hover:text-white"
						aria-label="Показать или скрыть пароль">
						{!isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
					</button>
				)}
				{error && error.message && (
					<p className="absolute bottom-[-25px] text-[14px] text-red-600 dark:text-red-500 left-0">
						{error.message}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
