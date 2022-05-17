import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

function Tip({ symbolsArr }) {
  const { tip, handleInput } = useContext(CalcContext)
  const tipItems = [5, 10, 15, 20, 25]
  return (
    <div className='tip'>
      <div className='label'>
        <label htmlFor='tip'>Select tip %</label>
        {tip && tip < 1 && <span className='invalid-msg'>Can't be zero</span>}
      </div>
      <div className='tip-options'>
        {tipItems.map((item) => {
          return (
            <button
              key={item}
              onClick={(e) => handleInput(e, 'tip')}
              value={item}
              className={tip === item ? 'active tip-option' : 'tip-option'}
            >
              {item}
            </button>
          )
        })}
        <input
          min='1'
          onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
          type='number'
          onChange={(e) => handleInput(e, 'tip')}
          className='tip-option'
          placeholder='Custom'
        />
      </div>
    </div>
  )
}

export default Tip
