import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddTaskPage from './pages/AddTaskPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const addTask = async(newTask) => {
    const res = await fetch('http://localhost:8000/api/tasks/', { //api/tasks
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
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
      </Route>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App