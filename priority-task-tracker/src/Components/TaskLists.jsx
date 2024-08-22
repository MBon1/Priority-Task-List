import React from 'react'
import TaskList from './TaskList'

function TaskLists() {
  return (
    <section className="grid lg:grid-flow-col auto-cols-max gap-5 place-content-center flex flex-wrap">
        <TaskList header='Priority 1'></TaskList>
        <TaskList header='Priority 2' bg='bg-orange-300'></TaskList>
        <TaskList header='Priority 3' bg='bg-yellow-200'></TaskList>
    </section>
  )
}

export default TaskLists