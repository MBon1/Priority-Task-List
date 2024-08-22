import React from 'react'
import Task from './Task'
import TaskListHeader from './TaskListHeader'

function TaskList({header='TASKS', bg='bg-red-400', tasks=[], date='0000-00-00'}) {
  return (
    <section className='border-2 border-black mt-5 w-96'>
        <TaskListHeader header={header} bg={bg}></TaskListHeader>
        <section>
            {tasks.map((task) => (
                <Task key={task.id} title={task.title} dueDate={task.dueDate} dueDateFont={task.dueDate < date ? 'text-red-400 font-bold' : 'text-gray-400'} description={task.description}></Task>
            ))}
        </section>
    </section>
  )
}

export default TaskList