import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import dollar from '../images/icon-dollar.svg'
function Bill({ symbolsArr }) {
  const { bill, handleInput } = useContext(CalcContext)
  return (
    <div className='bill'>
      <div className='label'>
        <label htmlFor='bill'>Bill</label>
        {bill && bill < 1 && <span className='invalid-msg'>Can't be zero</span>}
      </div>
      <img className='icon' src={dollar} alt="logo"/>
      <input
        min='1'
        onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
        onChange={(e) => handleInput(e, 'bill')}
        className='input'
        type='number'
        name='bill'
        placeholder='0'
      />
    </div>
  )
}

export default Bill
