import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import person from '../images/icon-person.svg'

function People({ symbolsArr }) {
  const { people, handleInput } = useContext(CalcContext)
  return (
    <div className='people'>
      <div className='label'>
        <label htmlFor='people'>Number of People</label>
        {people && people < 1 && (
          <span className='invalid-msg'>Can't be zero</span>
        )}
      </div>
      <img src={person} className='icon' alt='logo' />
      <input
        min='1'
        onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
        onChange={(e) => handleInput(e, 'people')}
        className='input'
        type='number'
        name='people'
        placeholder='0'
      />
    </div>
  )
}

export default People
