import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { TaskContext } from '../context/TaskContext';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function StatisticsPage() {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter(task => task.done).length;
  const notCompletedTasks = tasks.length - completedTasks;
  const productivityPercentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  const barData = {
    labels: ['Completed Tasks', 'Not Completed Tasks'],
    datasets: [
      {
        label: 'Tasks',
        data: [completedTasks, notCompletedTasks],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 0.6)'],
        borderWidth: 1,
      }
    ]
  };

  const doughnutData = {
    labels: ['Productive', 'Non-productive'],
    datasets: [{
      data: [productivityPercentage, 100 - productivityPercentage],
      backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 0.2)'],
      borderWidth: 1,
    }]
  };

  return (
    <div className="container mt-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '70vh' }}>
      <h1 className="text-center" style={{ color: "white", fontWeight: "bold", marginBottom: '20px' }}>Your Statistics</h1>
      <div className="chart-container" style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div style={{ width: '45%', height: '90%', marginRight: '5%' }}>  
          <h2 style={{ color: "white" }}>Task Distribution</h2>
          <Bar data={barData} options={{ maintainAspectRatio: false }} />
        </div>
        <div style={{ width: '45%', height: '90%', marginLeft: '5%' }}> 
          <h2 style={{ color: "white" }}>Productivity</h2>
          <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default StatisticsPage;










