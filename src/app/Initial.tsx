import "@app/styles/index.css";
import "@src/shared/config/i18n";
import { ThemeProvider, AuthProvider, LanguageProvider } from "@app/providers";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Initial = () => {
	return (
		<LanguageProvider>
			<StoreProvider store={store}>
				<ThemeProvider>
					<AuthProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</AuthProvider>
				</ThemeProvider>
			</StoreProvider>
		</LanguageProvider>
	);
};

export default Initial;
