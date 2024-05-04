import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function CompletedTasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderCompletedTasks() {
    // Filtrar solo las tareas completadas
    const completedTasks = tasks.filter(task => task.done === 1); // Asumiendo que 1 significa completada

    if (completedTasks.length === 0) return <h1 className="text-center mt-5" style={{ fontSize: '40px'}}>No completed tasks yet</h1>;
    return completedTasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center display-4 mb-5" style={{color:"white", fontWeight: "bold"}}>Completed Tasks</h1>
      <div className="d-flex flex-row flex-wrap justify-content-around">{renderCompletedTasks()}</div>
    </div>
  );
}

export default CompletedTasksPage;
