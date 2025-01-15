import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchCategoryDetail } from "@/hooks/list";
import { putWithAuth, deleteWithAuth } from "@/lib/apiClient";

const EditCategory = () => {
	const { listId } = useParams();
	if (!listId) return <div>Invalid ID</div>;
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const { data: list, isLoading, isError } = useFetchCategoryDetail(listId);

	// データが読み込まれている場合、タイトルの状態を設定します。
	useEffect(() => {
		if (list) {
			setTitle(list.title);
		}
	}, [list]);

	if (!listId) return <div>Invalid ID</div>;

	const handleSave = async () => {
		try {
			const data = { title };
			await putWithAuth(`/lists/${listId}`, data);
			alert("Category updated successfully");
			navigate("/"); // 編集後、元のリストまたは詳細ページに戻ることができます
		} catch (error) {
			alert("Failed to update the category");
			console.error("Error updating category:", error);
		}
	};

	const handleDelete = async () => {
		if (!window.confirm("Are you sure you want to delete?")) return;
		try {
			await deleteWithAuth(`/lists/${listId}`);
			alert("Category deleted successfully");
			navigate("/"); // 削除後、元のリストまたは詳細ページに戻ることができます
		} catch (error) {
			alert("Failed to delete the category");
			console.error("Error deleting category:", error);
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error!</div>;
	if (!list) return <div>Not Found</div>;

	return (
		<div>
			<h1>Edit Category</h1>
			<label htmlFor="category-title">Title</label>
			<input
				id="category-title"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<button onClick={handleSave}>Save</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default EditCategory;
