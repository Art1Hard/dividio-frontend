import "@app/styles/index.css";
import ThemeProvider from "@src/features/theme/components/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import GuardProvider from "./guard/GuardProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Initial = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<GuardProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</GuardProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default Initial;
