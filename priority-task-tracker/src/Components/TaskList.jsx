import React from 'react'
import Tasks from './Tasks'
import TaskListHeader from './TaskListHeader'

function TaskList({header='TASKS', bg='bg-red-400'}) {
  return (
    <section className='border-2 border-black mt-5 w-96'>
        <TaskListHeader header={header} bg={bg}></TaskListHeader>
        <Tasks></Tasks>
    </section>
  )
}

export default TaskList