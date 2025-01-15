import Layout from "@/layouts";
import AddTask from "@/pages/AddTask";
import CreateCategory from "@/pages/CreateCategory";
import EditCategory from "@/pages/EditCategory";
import EditTask from "@/pages/EditTask";
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
				<Route
					path="/list/create"
					element={<Layout content={<CreateCategory />} />}
				/>
				<Route
					path="/lists/:listId/task/add"
					element={<Layout content={<AddTask />} />}
				/>
				<Route
					path="/lists/:listId/edit"
					element={<Layout content={<EditCategory />} />}
				/>
				<Route
					path="/lists/:listId/tasks/:taskId"
					element={<Layout content={<EditTask />} />}
				/>
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
