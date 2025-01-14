import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const AddTaskButton = () => {
  const navigate = useNavigate();
  const onAddTask = () => {
    navigate("/add");
  }
  return (
    <Button variant="outline" size="icon" onClick={onAddTask}>
    <Plus className="h-[1.2rem] w-[1.2rem]" />
  </Button>
  )
}
