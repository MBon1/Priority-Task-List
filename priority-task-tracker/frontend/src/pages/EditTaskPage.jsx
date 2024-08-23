import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
//import TaskForm from '../Components/TaskForm';
import PageTitle from '../Components/pageTitle';

function EditTaskPage({deleteTask, updateTaskSubmit}) {
    const {id} = useParams();

    const task = useLoaderData()

    const [priority, setPriority] = useState(task.priority);
    const [title, setTitle] = useState(task.title);
    const [rawDueDate, setRawDueDate] = useState(task.dueDate.substring(0,10));
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(!task.active);

    const navigate = useNavigate();

    const deleteTaskFunc = (e) => {

        deleteTask(task.id);

        return navigate('/');
    };

    const submitForm = (e) => {
        e.preventDefault();

        const dueDate = new Date(rawDueDate).toISOString();
        const active = !completed;

        const updatedTask = {
            id,
            priority,
            title,
            dueDate,
            description,
            active
        };

        updateTaskSubmit(updatedTask);

        return navigate(active ? '/' : '/completed-tasks');
    };
    
    const inputStyle = 'm-2';
    const inputFieldStyle = 'border rounded w-full py-2 px-3 mb-2';

    return (
        // <TaskForm formTitle={'Edit Task'} setTitle={setTitle} setRawDueDate={setRawDueDate} setDescription={setDescription} setPriority={setPriority} setActive={setActive}
        // priority={priority} title={title} rawDueDate={rawDueDate} description={description} active={active}
        // addingNewTask={false} deleteTask={deleteTaskFunc}></TaskForm>
        <>
            <PageTitle title={'Edit Task'}></PageTitle>
            <section className='flex justify-center'>
            <div className='p-2 border-2 border-black bg-white rounded-lg shadow-md m-4 w-11/12 relative'>
                <form onSubmit={submitForm}>
                {/* Title */}
                <div className={inputStyle}>
                    <label htmlFor='title' className='font-bold'>Title</label>
                    <input type='text' id='title' name='title' maxLength={60} className={inputFieldStyle} placeholder='Enter the title for this task (60 characters maximum)' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                {/* Due Date */}
                <div className={inputStyle}>
                    <label htmlFor='dueDate' className='font-bold'>Due Date</label>
                    <input type='date' id='rawDueDate' className={inputFieldStyle} required value={rawDueDate} onChange={(e) => setRawDueDate(e.target.value)}></input>
                </div>
                
                {/* Description */}
                <div className={inputStyle}>
                    <label htmlFor='description' className='font-bold'>Description</label>
                    <textarea id='description' name='description' className={inputFieldStyle} placeholder='Add explanation about this task (optional)' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                {/* Priority */}
                <div className={inputStyle}>
                    <label htmlFor='priority' className='font-bold'>Priority</label>
                    <select id='priority' name='priority' className={inputFieldStyle} required value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    </select>
                </div>

                {/* Active Task Status */}
                <div className={inputStyle}>
                    <label htmlFor='completed' className='font-bold'>Is this Task Completed</label>
                    <input type='checkbox' id='completed' className='border rounded ml-3 py-2 px-3 mb-2' checked={completed} onChange={(e) => setCompleted(e.target.checked)}></input>
                </div>

                <div className='flex justify-center pt-4 mb-4'>
                    <div className='w-1/2 flex justify-center'>
                        <button className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-4/5 focus:outline-none focus:shadow-outline' type='submit'>Submit Changes to Task</button>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <button className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-4/5 focus:outline-none focus:shadow-outline' type='button' onClick={(e) => deleteTaskFunc(e.target.value)}>Delete Task</button>
                    </div>
                </div>
                </form>
            </div>
            </section>
        </>
    )
}

export default EditTaskPage