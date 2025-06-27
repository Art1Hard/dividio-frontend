import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Initial from "./app/Initial";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Initial />
	</StrictMode>
);
