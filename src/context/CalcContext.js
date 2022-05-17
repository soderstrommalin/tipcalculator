import { createContext, useState } from 'react'

export const CalcContext = createContext()

export const CalcProvider = ({ children }) => {
  const [bill, setBill] = useState()
  const [tip, setTip] = useState()
  const [people, setPeople] = useState()
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  const calculateTip = () => {
    if (validateInputs()) {
      const currTipAmount = bill / tip / people
      const currTotal = currTipAmount + bill / people
      if (Number.isFinite(currTipAmount) && Number.isFinite(currTotal)) {
        setTipAmount(currTipAmount.toFixed(2))
        setTotal(currTotal.toFixed(2))
      }
    }
  }

  const validateInputs = () => {
    if ((bill || tip || people) === NaN || (bill || tip || people) < 1) {
      return false
    }
    return true
  }

  const reset = () => {
    setTipAmount(0)
    setTotal(0)
    setTip('')
    setPeople('')
    setBill('')
  }

  const handleInput = (e, currVal) => {
    e.preventDefault()
    const val = e.currentTarget.value
    currVal === 'tip' && setTip(val)
    currVal === 'bill' && setBill(val)
    currVal === 'people' && setPeople(val)
  }

  return (
    <CalcContext.Provider
      value={{
        calculateTip,
        handleInput,
        reset,
        bill,
        tip,
        people,
        tipAmount,
        total,
      }}
    >
      {children}
    </CalcContext.Provider>
  )
}
