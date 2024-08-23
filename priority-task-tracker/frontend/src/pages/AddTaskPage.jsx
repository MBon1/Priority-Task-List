import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import TaskForm from '../Components/TaskForm';
import PageTitle from '../Components/pageTitle';

function AddTaskPage({addTaskSubmit}) {
  const [priority, setPriority] = useState(1);
  const [title, setTitle] = useState('');
  const [rawDueDate, setRawDueDate] = useState('');
  const [description, setDescription] = useState('');
  const active = true;  // When adding a task, active will always be true

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const dueDate = new Date(rawDueDate).toISOString();

    const task = {
      priority,
      title,
      dueDate,
      description,
      active
    };
    console.log(task);

    addTaskSubmit(task);

    return navigate('/');
  };
  
  const inputStyle = 'm-2';
  const inputFieldStyle = 'border rounded w-full py-2 px-3 mb-2';

  return (
    // <TaskForm formTitle={'Add Task'} setTitle={setTitle} setRawDueDate={setRawDueDate} setDescription={setDescription} setPriority={setPriority}
    // priority={priority} title={title} rawDueDate={rawDueDate} description={description}
    // addingNewTask={true} submitAddForm={submitForm}></TaskForm>
    <>
      <PageTitle title={'Add Task'}></PageTitle>
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
              <label htmlFor='title' className='font-bold'>Due Date</label>
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

            <div className='flex justify-center pt-4 mb-4'>
              <button
                className='bg-green-200 hover:bg-green-300 text-black font-bold py-2 rounded-md w-11/12 focus:outline-none focus:shadow-outline' type='submit'>Add Task</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddTaskPage