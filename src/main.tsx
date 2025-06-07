import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@src/App";
import { Provider } from "react-redux";
import { store } from "@src/store";
import GuardProvider from "./components/guard/GuardProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<GuardProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GuardProvider>
	</Provider>
);
