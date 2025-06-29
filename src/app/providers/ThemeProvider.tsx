import { useAppSelector } from "@src/shared/lib/hooks/redux";
import { useEffect, type ReactNode } from "react";

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const theme = useAppSelector((state) => state.theme.currentTheme);

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme);
	}, [theme]);

	return <>{children}</>;
};

export default ThemeProvider;
