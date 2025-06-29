import "@app/styles/index.css";
import { ThemeProvider, AuthProvider } from "@app/providers";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Initial = () => {
	return (
		<StoreProvider store={store}>
			<ThemeProvider>
				<AuthProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</AuthProvider>
			</ThemeProvider>
		</StoreProvider>
	);
};

export default Initial;
