import { progressColors } from "@src/shared/config/colors";
import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";
import cn from "clsx";

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		return (
			<div>
				<label className="block mb-2 text-sm font-medium">Выберите цвет</label>
				<div className="relative flex gap-3 flex-wrap">
					{progressColors.map(({ name, value }) => (
						<label key={value} className="cursor-pointer">
							<input
								type="radio"
								value={value}
								ref={ref}
								{...rest}
								className="sr-only"
							/>
							<div
								className={cn(
									"w-8 h-8 rounded-full border-2 transition",
									selectedColor === value
										? "border-gray-700 dark:border-white"
										: "border-transparent",
									`bg-${value}-500`
								)}
								title={name}></div>
						</label>
					))}

					{error && error.message && (
						<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
							{error.message}
						</p>
					)}
				</div>
			</div>
		);
	}
);

export default ColorPicker;
