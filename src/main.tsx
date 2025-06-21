import { createRoot } from "react-dom/client";
import "@src/styles/index.css";
import App from "@app/App";
import { Provider } from "react-redux";
import { store } from "@app/store";
import GuardProvider from "./components/guard/GuardProvider";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./features/theme/components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
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
