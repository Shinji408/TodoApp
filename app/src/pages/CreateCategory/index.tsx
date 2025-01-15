import { useState } from "react";
import { postWithAuth } from "@/lib/apiClient";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
	const [title, setTitle] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			const data = { title };
			await postWithAuth("/lists", data);
			alert("Category created successfully!");
			navigate("/");
		} catch (error) {
			console.error("Error creating category:", error);
			alert("Failed to create category.");
		}
	};

	return (
		<div>
			<h1>Create Category</h1>
			<label htmlFor="category-title">Title</label>
			<input
				id="category-title"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button onClick={handleSubmit}>Create</button>
		</div>
	);
};

export default CreateCategory;
