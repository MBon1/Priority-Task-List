import React from 'react'

function Task({title='TASK NAME', dueDate='00/00/0000', dueDateFont='text-gray-400', description}) {
  return (
    <div className='p-2 border-2 border-black bg-white rounded-lg shadow-md m-4 relative'>
        <div>
            <h3 className='text-xl font-bold'>{title}</h3>
            <div><span className='text-gray-400'> Due: </span> <span className={dueDateFont}>{dueDate}</span></div>
        </div>
        <div className='pt-1.5 text-base'>{description}</div>
    </div>
  )
}

export default Task