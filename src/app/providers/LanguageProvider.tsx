import { useEffect, type JSX } from "react";
import { useTranslation } from "react-i18next";

const LanguageProvider = ({ children }: { children: JSX.Element }) => {
	const { i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	return <>{children}</>;
};

export default LanguageProvider;
