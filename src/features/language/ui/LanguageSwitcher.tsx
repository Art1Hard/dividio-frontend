import useChangeLanguage from "../lib/useChangeLanguage";

const LanguageSwitcher = () => {
	const [language, changeLanguage] = useChangeLanguage();

	return (
		<div className="flex gap-2">
			<button
				className="text-lg uppercase font-bold rounded-full"
				onClick={changeLanguage}>
				{language === "ru" ? "en" : "ru"}
			</button>
		</div>
	);
};

export default LanguageSwitcher;
