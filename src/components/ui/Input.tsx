import { forwardRef, useState } from "react";
import cn from "clsx";
import type { FieldError } from "react-hook-form";
import { EyeClosedIcon, EyeOpenIcon } from "../auth/ui/EyeIcons";

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
						className="block text-sm font-medium text-slate-300 mb-1">
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
						"w-full px-4 py-2 rounded-lg bg-slate-700 text-white border focus:outline-none focus:ring-2 focus:ring-blue-500",
						error ? "border-red-500" : "border-slate-600",
						className
					)}
					{...props}
				/>

				{type === "password" && hasShowIcon && (
					<button
						onClick={() => setIsShowPassword((prev) => !prev)}
						type="button"
						className="absolute right-3 top-9 text-slate-400 hover:text-white"
						aria-label="Показать или скрыть пароль">
						{!isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
					</button>
				)}
				{error && error.message && (
					<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
						{error.message}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
