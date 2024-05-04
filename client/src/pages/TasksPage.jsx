import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    const incompleteTasks = tasks.filter(task => task.done === 0);

    if (incompleteTasks.length === 0) return <h1 className="text-center mt-5">No tasks yet</h1>;
    return incompleteTasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  
  return (
    <div className="container mt-5">
      <h1 className="text-center display-4 mb-5" style={{color:"white", fontWeight: "bold"}}>Tasks</h1>
      <div className="d-flex flex-row flex-wrap justify-content-around">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
