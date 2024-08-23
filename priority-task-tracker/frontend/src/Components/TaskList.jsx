import React from 'react'
import Task from './Task'
import TaskListHeader from './TaskListHeader'

function GetDueDateFont(dueDate, today, deadline, inActiveTasksList) {
    if (inActiveTasksList && dueDate < today) {
        console.log("LATE: " + dueDate + " " + today);
        return 'text-red-800 font-bold';
    } else if (inActiveTasksList && dueDate == today) {
        console.log("URGENT: " + dueDate + " " + today);
        return 'text-red-400 font-bold';
    } else if (inActiveTasksList && dueDate < deadline) {
        console.log("URGENT: " + dueDate + " " + today);
        return 'text-red-400';
    }else {
        return 'text-gray-400';
    }
}

function TaskList({header='TASKS', bg='bg-red-400', tasks=[], today='0000-00-00', deadline='0000-00-00', inActiveTasksList=true}) {
  return (
    <section className='bg-white border-2 border-black w-96'>
        <TaskListHeader header={header} bg={bg}></TaskListHeader>
        <section>
            {tasks.map((task) => (
                <Task key={task.id} title={task.title} dueDate={task.dueDate.split('T')[0]} 
                    dueDateFont={GetDueDateFont(task.dueDate.split('T')[0], today, deadline, inActiveTasksList)} description={task.description}></Task>
            ))}
        </section>
    </section>
  )
}

export default TaskList