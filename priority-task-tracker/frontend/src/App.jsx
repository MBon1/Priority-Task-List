import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddTaskPage from './pages/AddTaskPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import NotFoundPage from './pages/NotFoundPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  // Add New Task
  const addTask = async(newTask) => {
    const res = await fetch('http://localhost:8000/api/tasks/', { //api/tasks
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    });
    return;
  };

  // Delete Existing Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:8000/api/tasks/${id}/`, { //api/tasks
      method: 'DELETE',
    });
    return;
  };

  // Update Existing Task
  const updateTask = async(updatedTask) => {
      const res = await fetch(`http://localhost:8000/api/tasks/${updatedTask.id}/`, { //api/tasks
      method: 'PUT',
      body: JSON.stringify(updatedTask),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='/add-task' element={<AddTaskPage addTaskSubmit={addTask}></AddTaskPage>}></Route>
        <Route path='/completed-tasks' element={<CompletedTasksPage></CompletedTasksPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

        <Route path='/edit-task/:id' element={<EditTaskPage deleteTask={deleteTask} updateTaskSubmit={updateTask}></EditTaskPage>} loader={taskLoader}></Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

const taskLoader = async ({ params }) => {
  const res = await fetch(`/api/tasks/${params.id}`);
  const data = await res.json();
  return data;
};

export default App