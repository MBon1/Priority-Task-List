import React from 'react'

function TaskListHeader({header='Tasks', bg='bg-red-400'}) {
  return (
    <>
    <section className={`${bg} px-4 py-5 text-center`}>
        <h2 className='text-2xl font-bold'>{header}</h2>
    </section>
    <div className='h-1 bg-black'></div>
    </>
  )
}

export default TaskListHeader