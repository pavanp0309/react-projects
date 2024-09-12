import React from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className='btn btn-outline-dark w-25'  value={props.value}>{props.value}</button>
    </>
  )
}

export default Button
