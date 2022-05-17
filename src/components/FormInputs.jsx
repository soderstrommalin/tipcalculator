import { useState } from 'react'
import Bill from './Bill'
import People from './People'
import Tip from './Tip'

function FormInputs() {
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])
  return (
    <div className='form'>
      <Bill symbolsArr={symbolsArr} />
      <Tip symbolsArr={symbolsArr} />
      <People symbolsArr={symbolsArr} />
    </div>
  )
}

export default FormInputs
