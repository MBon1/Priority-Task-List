import React from 'react'

function PageTitle({title}) {
  return (
    <div className='flex justify-center pt-3 ml-2 mr-2'>
        <h2 className='bg-green-200 rounded shadow-sm w-screen h-16 text-3xl font-bold py-3.5 text-center'>
            {title}
        </h2>
    </div>
  )
}

export default PageTitle