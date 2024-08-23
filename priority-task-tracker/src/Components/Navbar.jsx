import React from 'react'

function Navbar() {
  return (
    <div className='bg-green-50'>
        <nav className='bg-green-200 rounded shadow-sm m-2'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <a href="/index.html" className="text-black bg-green-300 hover:bg-green-300 hover:text-black rounded-md px-3 py-2">
                                    Current Tasks
                                </a>
                                <a href="/edit-tasks.html" className="text-black hover:bg-green-300 hover:text-black rounded-md px-3 py-2">
                                    Add Task
                                </a>
                                <a href="/completed-tasks.html" className="text-black hover:bg-green-300 hover:text-black rounded-md px-3 py-2">
                                    View Completed Tasks
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar