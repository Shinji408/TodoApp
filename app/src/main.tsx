import { StrictMode } from "react";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/theme-provider";
import Router from "./routes/Router";
import "@/index.css";
import { store } from "@/store";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Provider store={store}>
				<CookiesProvider>
					<Router />
				</CookiesProvider>
			</Provider>
		</ThemeProvider>
	</StrictMode>,
);
