import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Task({title='TASK NAME', dueDate='00/00/0000', dueDateFont='text-gray-400', description, id}) {
    const[showDescription, setShowDescription] = useState(false);

    let desc = description;
    const maxCharacterCount = 85;

    if (!showDescription && description.length > maxCharacterCount) {
        desc = description.substring(0,maxCharacterCount) + '...';
    }

    return (
        <div className='p-2 border-2 border-black bg-white rounded-lg shadow-md m-4 relative'>
            <div>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div><span className='text-gray-400'> Due: </span> <span className={dueDateFont}>{dueDate}</span></div>
            </div>
            <div className='pt-1.5 text-base'>{desc}</div>
            {description.length > maxCharacterCount && <button onClick={() => setShowDescription((prevState) => !prevState)} className='text-indigo-500 hover:text-indigo-600'>{showDescription ? 'Less' : 'More'}</button>}
            
            <div className='h-8'>
                <Link
                    to={`/edit-task/${id}`}
                    className="bg-green-200 hover:bg-green-300 text-black px-4 py-2 absolute bottom-2 right-2 rounded-lg text-center text-sm"
                >
                Edit Task
                </Link>
            </div>
        </div>
    )
}

export default Task