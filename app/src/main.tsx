import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import Router from "./routes/Router";
import "@/index.css";
import { store } from "@/store";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<Provider store={store}>
    <CookiesProvider>
			<Router />
		</CookiesProvider>
		</Provider>
		</ThemeProvider>
	</StrictMode>,
);
