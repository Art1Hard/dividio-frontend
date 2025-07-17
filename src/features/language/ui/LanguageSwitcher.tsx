import { useTranslation } from "react-i18next";
import useChangeLanguage from "../lib/useChangeLanguage";

const LanguageSwitcher = () => {
	const { t } = useTranslation();
	const [language, changeLanguage] = useChangeLanguage();

	return (
		<div className="flex gap-2">
			<button
				title={t("language.title")}
				className="text-lg uppercase font-bold rounded-full"
				onClick={changeLanguage}>
				{language === "ru" ? "en" : "ru"}
			</button>
		</div>
	);
};

export default LanguageSwitcher;
