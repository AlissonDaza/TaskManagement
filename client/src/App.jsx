import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import TasksPage from './pages/TasksPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import ConsumeApi from './pages/ConsumeApi';
import CompletedTasksPage from './pages/CompletedTaskPage';
import StatisticsPage from './pages/StatisticsPage';
import { TaskContextProvider } from './context/TaskProvider';
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-content content">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/tasks"
              element={
                <>
                  <Navbar />
                  <TasksPage />
                </>
              }
            />
            <Route
              path="/new"
              element={
                <>
                  <Navbar />
                  <TaskForm />
                </>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <>
                  <Navbar />
                  <TaskForm />
                </>
              }
            />
            <Route
              path="/consume-api"
              element={
                <>
                  <Navbar />
                  <ConsumeApi />
                </>
              }
            />
            <Route
              path="/completed-tasks"
              element={
                <>
                  <Navbar />
                  <CompletedTasksPage />
                </>
              }
            />
            <Route
              path="/statistics"
              element={
                <>
                  <Navbar />
                  <StatisticsPage />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </TaskContextProvider>
      </div>
    </div >
  );
}

export default App;
