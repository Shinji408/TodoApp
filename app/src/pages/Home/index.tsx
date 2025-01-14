import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddTaskButton } from "@/features/AddTaskButton";
import { TaskListResponse } from "@/types";
import { useFetchAllList } from "@/services/Book/useFetchAllList";

const Home = () => {
  const navigate = useNavigate();
  const { lists, isLoading, isError } = useFetchAllList();
  const [selectListId, setSelectListId] = useState<string>();

  const handleSelectList = (id: string) => {
    setSelectListId(id);
    console.log(id);
  };

  if (isLoading) {
    return <div>Loading...</div>; // 読み込み中の表示
  }

  if (isError) {
    return <div>Error loading lists...</div>; // エラーの表示
  }

  return (
    <>
      <AddTaskButton />
      <ul className="list-tab">
        {lists?.map((list: TaskListResponse) => {
          const isActive = list.id === selectListId;
          return (
            <li
              key={list.id}
              className={`list-tab-item ${isActive ? "active" : ""}`}
              onClick={() => handleSelectList(list.id)}
            >
              {isActive ? "▶ " : ""}
              {list.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
