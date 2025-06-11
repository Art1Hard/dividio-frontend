import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

const colors = [
	{ name: "Серый", value: "gray-500" },
	{ name: "Зелёный", value: "green-500" },
	{ name: "Синий", value: "blue-500" },
	{ name: "Жёлтый", value: "yellow-500" },
	{ name: "Красный", value: "red-500" },
	{ name: "Фиолетовый", value: "purple-500" },
];

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		return (
			<div>
				<label className="block mb-2 text-sm font-medium text-white">
					Выберите цвет
				</label>
				<div className="relative flex gap-3 flex-wrap">
					{colors.map(({ name, value }) => (
						<label key={value} className="cursor-pointer">
							<input
								type="radio"
								value={value}
								ref={ref}
								{...rest}
								className="sr-only"
							/>
							<div
								className={`w-8 h-8 rounded-full border-2 ${
									selectedColor === value
										? "border-white"
										: "border-transparent"
								} bg-${value} transition`}
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
