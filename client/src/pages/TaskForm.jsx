import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="container mt-5" style={{justifyContent: 'center'}}>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/tasks");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="card bg-dark text-white mx-auto p-5"
            style={{ maxWidth: '540px'}}
          >
            <h1 className="text-center mb-4">{params.id ? "Edit Task" : "New Task"}</h1>
            <div className="mb-3" style={{width: '100%'}}>
              <label htmlFor="title" className="form-label" >Title</label>
              <input  
                type="text"
                name="title"
                id="title"
                placeholder="Write a title"
                className="form-control"
                onChange={handleChange}
                value={values.title}
              />
            </div>

            <div className="mb-3" style={{width: '100%'}}>
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                name="description"
                id="description"
                rows="3"
                placeholder="Write a description"
                className="form-control"
                onChange={handleChange}
                value={values.description}
               
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-100"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
