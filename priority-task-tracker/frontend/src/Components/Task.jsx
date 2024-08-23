import React from 'react'
import { useState } from 'react'

function Task({title='TASK NAME', dueDate='0000-00-00', dueDateFont='text-gray-400', description}) {
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
        </div>
    )
}

export default Task