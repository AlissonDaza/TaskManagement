import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="card bg-dark text-white mb-3 mx-1" style={{ width: '25rem', height: '18rem'}}>
      <div className="card-header d-flex justify-content-between">
        <h5 className="mb-0" style={{fontSize: '25px'}}>{task.title}</h5>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </div>
      <div className="card-body">
        <p className="card-text small" style={{fontSize: '17px'}}>{task.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>
          <button
            className="btn btn-outline-secondary btn-sm me-1"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-secondary btn-sm me-1"
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-secondary btn-sm me-1"
            onClick={() => handleDone(task.done)}
          >
            Toggle Task
          </button>
        </div>
        <span style={{ color: 'white', alignSelf: 'center', fontSize: '14px'}}>
          {new Date(task.createAt).toLocaleDateString()} at {new Date(task.createAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;


