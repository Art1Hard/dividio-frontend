import { useTranslation } from "react-i18next";

const useChangeLanguage = () => {
	const { i18n } = useTranslation();

	const changeLanguage = () => {
		if (i18n.language === "en") {
			i18n.changeLanguage("ru");
			return;
		}

		i18n.changeLanguage("en");
	};

	return [i18n.language, changeLanguage] as const;
};

export default useChangeLanguage;
