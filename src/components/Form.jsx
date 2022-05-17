import { useContext, useEffect } from 'react'
import { CalcContext } from '../context/CalcContext'
import FormInputs from './FormInputs'
import Result from './Result'

function Form() {
  const { bill, tip, people, calculateTip } = useContext(CalcContext)
  useEffect(() => {
    calculateTip()
  }, [bill, tip, people])
  return (
    <form className='wrapper'>
      <FormInputs />
      <Result />
    </form>
  )
}

export default Form
