import React from 'react'
import Task from './Task'

function Tasks() {
  return (
    <section>
        <Task title='Task 1' dueDate='08/24/2024' dueDateFont='text-red-400 font-bold' description='Create website.'></Task>
        <Task title='Task 2' dueDate='08/30/2024' description='Submit website.'></Task>
    </section>
  )
}

export default Tasks