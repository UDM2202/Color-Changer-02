import React from 'react'
import colorNames from 'colornames'
import reportWebVitals from './reportWebVitals'
const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Value!</label>
                 <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />

      <button onClick={() => setIsDarkText(!isDarkText)}>Toggle text color</button>
    </form>
    
  )
}

export default Input
