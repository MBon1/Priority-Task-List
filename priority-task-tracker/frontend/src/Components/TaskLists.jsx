import React from 'react'
import { useState, useEffect } from 'react';
import PageTitle from './pageTitle';
import TaskList from './TaskList'

function FormatDateString(date)
{
    return date.toISOString().split('T')[0];
}

function TaskLists({listCount=3, showActiveTasks=true}) {
    const today = new Date();
    const todayYMD =  FormatDateString(today);
    const deadline = new Date(today.setDate(today.getDate() + 7));
    const deadlineYMD = FormatDateString(deadline);


    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async() => {
            try {
                const res = await fetch('http://localhost:8000/api/tasks/');
                //const res = await fetch('/api/tasks');
                const data = await res.json();
                setTasks(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTasks();
    }, []);

    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const priorityListColors = ['bg-red-400', 'bg-orange-300', 'bg-yellow-200'];
    const priorityLists = [];
    for (let i = 0; i < listCount; i++) {
        priorityLists.push((tasks.filter(task => task.priority == i + 1 && task.active == showActiveTasks)));
    }

    return (
        <>
            <PageTitle title={showActiveTasks ? 'Active Tasks' : 'Completed Tasks'}></PageTitle>
            <div className='grid lg:grid-flow-col auto-cols-max gap-5 place-content-center flex flex-wrap pt-4 pb-7'>
                {priorityLists.map((list, index) => (
                    <TaskList key={index} header={(!showActiveTasks ? 'Completed ' : '') + 'Priority ' + (index + 1) + ' Tasks'} 
                        bg={priorityListColors[index]} tasks={list} today={todayYMD} deadline={deadlineYMD} inActiveTasksList={showActiveTasks}></TaskList>
                ))}
            </div>
        </>
    )
}

export default TaskLists