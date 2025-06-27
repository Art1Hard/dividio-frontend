import { useAppSelector } from "@src/shared/lib/hooks/redux";
import { useActions } from "@src/shared/lib/hooks/redux/actions";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ToggleThemeButton = () => {
	const theme = useAppSelector((state) => state.theme.currentTheme);
	const { toggleTheme } = useActions();

	return (
		<div>
			<h3 className="text-sm mb-1">Настройки:</h3>

			<div className="flex items-center justify-between gap-2">
				<p className="text-lg dark:text-white">Сменить тему:</p>
				<div className="flex items-center gap-2">
					<MdOutlineLightMode size={20} />
					<button
						onClick={() => toggleTheme()}
						className="relative inline-flex items-center justify-center w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors focus:outline-none">
						<span
							className={`absolute h-5 w-5 rounded-full bg-white shadow-md transform transition-transform
          ${
						theme === "light" ? "translate-x-[-11px]" : "translate-x-[11px]"
					}`}></span>
					</button>
					<MdOutlineDarkMode size={20} />
				</div>
			</div>
		</div>
	);
};
