import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Components/pageTitle';


const inputStyle = 'm-2';
const inputFieldStyle = 'border rounded w-full py-2 px-3 mb-2';

function TaskForm({ formTitle,
    setTitle, setRawDueDate, setDescription, setPriority, setActive, 
    priority, title, rawDueDate, description, active,
    defaultTtile, defaultDueDate, defaultDescription, defaultPriority, defaultActive, 
    addingNewTask = true, submitAddForm, deleteTask}) {
  return (
    <>
        <PageTitle title={formTitle}></PageTitle>
        <section className='flex justify-center'>
        <div className='p-2 border-2 border-black bg-white rounded-lg shadow-md m-4 w-11/12 relative'>
            <form onSubmit={addingNewTask ? submitAddForm : submitAddForm}>
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
            {!addingNewTask ? 
                (<div className={inputStyle}>
                    <label htmlFor='active' className='font-bold'>Is this Task Completed</label>
                    <input type='checkbox' id='active' className='border rounded ml-3 py-2 px-3 mb-2' checked={active} onChange={(e) => setActive(e.target.checked)}></input>
                </div>) : 
                <></>
            }

            <div className='flex justify-center pt-4 mb-4'>
                {addingNewTask ? 
                    <button className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-11/12 focus:outline-none focus:shadow-outline' type='submit'>Add Task</button> : 
                    <>
                        <div className='w-1/2 flex justify-center'>
                            <button className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-4/5 focus:outline-none focus:shadow-outline' type='submit'>Submit Changes to Task</button>
                        </div>
                        <div className='w-1/2 flex justify-center'>
                            <button className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-4/5 focus:outline-none focus:shadow-outline' type='button' onClick={() => deleteTask()}>Delete Task</button>
                        </div>
                    </>
                }
            </div>
            </form>
        </div>
        </section>
    </>
  )
}

export default TaskForm