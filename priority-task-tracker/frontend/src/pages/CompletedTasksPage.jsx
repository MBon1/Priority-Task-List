import React from 'react'
import TaskLists from '../Components/TaskLists'

function CompletedTasksPage() {
  return (
    <TaskLists showActiveTasks={false}></TaskLists>
  )
}

export default CompletedTasksPage