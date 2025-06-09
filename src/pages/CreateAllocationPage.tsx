import useCreateAllocation from "@src/hooks/allocation/useCreateAllocation";
import Input from "@src/components/ui/Input";

const colors = [
	{ name: "Серый", value: "gray-500" },
	{ name: "Зелёный", value: "green-500" },
	{ name: "Синий", value: "blue-500" },
	{ name: "Жёлтый", value: "yellow-500" },
	{ name: "Красный", value: "red-500" },
	{ name: "Фиолетовый", value: "purple-500" },
];

const CreateAllocationPage = () => {
	const { register, submit, isSubmitting, errors, watch } =
		useCreateAllocation();

	const selectedColor = watch("color");

	return (
		<div className="h-full flex justify-center items-center">
			<div className="max-w-md mx-auto bg-slate-800 p-6 rounded-xl shadow-md w-full">
				<h2 className="text-xl font-semibold text-white mb-4 text-center">
					Создание категории
				</h2>

				<form onSubmit={submit} className="space-y-8">
					<Input
						label="title"
						labelText="Название"
						placeholder="Например: Сбережения"
						{...register("title")}
						error={errors.title}
					/>

					<Input
						label="percentage"
						labelText="Процент"
						placeholder="Например: 20"
						{...register("percentage", { valueAsNumber: true })}
						error={errors.percentage}
					/>

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
										{...register("color")}
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

							{errors.color && errors.color.message && (
								<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
									{errors.color.message}
								</p>
							)}
						</div>
					</div>

					<button
						disabled={isSubmitting}
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
						{isSubmitting ? "Создание..." : "Создать"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateAllocationPage;
