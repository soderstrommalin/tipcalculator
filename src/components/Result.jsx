import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

function Result() {
  const { tipAmount, total, reset } = useContext(CalcContext)
  return (
    <div className='result'>
      <div className='display-tip'>
        <div>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div>
          <h3 className='text-display'>{tipAmount || 0}</h3>
        </div>
      </div>
      <div className='display-total'>
        <div>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div>
          <h3 className='text-display'>{total || 0}</h3>
        </div>
      </div>
      <div className='btn'>
        <button onClick={reset} type='reset'>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Result
