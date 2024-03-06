import React from 'react'
import './Toggle.css'

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className='toggle-container'>
        <input //set this to display: none; or visibility: hidden; in the CSS
            type="checkbox" 
            id="check" //use this to link the input to the label in the htmlFor attribute
            className='toggle'
            onChange={handleChange}
            checked={isChecked} 
        />
        {/*
            the value of the attribute = id of the target input.
            linking the input and label like this enables us to achieve
            the desired functionality regardless of the element that is 
            clicked 
        */}
        <label htmlFor="check">Dark Mode</label> 
    </div>
  )
}

export default Toggle
