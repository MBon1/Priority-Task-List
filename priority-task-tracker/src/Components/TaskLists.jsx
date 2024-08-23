import React from 'react'
import TaskList from './TaskList'
import tasks from '../tasks.json'

function TaskLists() {
    const today = new Date();
    const deadline = new Date(today.setDate(today.getDate() + 7));;
    const deadlineYMD = deadline.toISOString().split('T')[0];

    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const priorityListColors = ['bg-red-400', 'bg-orange-300', 'bg-yellow-200'];
    const priorityLists = [];
    for (let i = 0; i < 3; i++) {
        priorityLists.push((tasks.filter(task => task.priority == i + 1)));
    }

    return (
        <section className="grid lg:grid-flow-col auto-cols-max gap-5 place-content-center flex flex-wrap pt-7 pb-7">
            {priorityLists.map((list, index) => (
                <TaskList key={index} header={'Priority ' + (index + 1)} bg={priorityListColors[index]} tasks={list} date={deadlineYMD}></TaskList>
            ))}
        </section>
    )
}

export default TaskLists