import { progressColors } from "@src/shared/config/colors";
import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";
import cn from "clsx";
import { useTranslation } from "react-i18next";

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		const { t } = useTranslation();
		return (
			<div>
				<label className="block mb-2 text-sm font-medium">
					{t("colorPicker.title")}
				</label>
				<div className="relative flex gap-3 flex-wrap">
					{progressColors.map((color) => (
						<label key={color} className="cursor-pointer">
							<input
								type="radio"
								value={color}
								ref={ref}
								{...rest}
								className="sr-only"
							/>
							<div
								className={cn(
									"w-8 h-8 rounded-full border-2 transition",
									selectedColor === color
										? "border-gray-700 dark:border-white"
										: "border-transparent",
									`bg-${color}-500`
								)}
								title={t(`colorPicker.colors.${color}`)}></div>
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
