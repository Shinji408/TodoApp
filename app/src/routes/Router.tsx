import Layout from "@/layouts";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout content={<Home />} />} />
				<Route path="/signin" element={<Layout content={<SignIn />} />} />
				<Route path="/signup" element={<Layout content={<SignUp />} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
