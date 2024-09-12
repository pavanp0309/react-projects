import React from 'react'

const Display = (props) => {
  return (
    <>
      <h1 className='p-1 border border-warning text-end'>{props.data}</h1>
    </>
  )
}

export default Display
