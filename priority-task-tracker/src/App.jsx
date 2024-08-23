import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddTaskPage from './pages/AddTaskPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path='/add-task' element={<AddTaskPage></AddTaskPage>}></Route>
      <Route path='/completed-tasks' element={<CompletedTasksPage></CompletedTasksPage>}></Route>
      <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App