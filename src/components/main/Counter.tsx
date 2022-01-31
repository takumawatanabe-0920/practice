import React from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '@practice/features/counter/counterSlice'

const Counter = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(selectCount)
  console.log({
    counter,
  })

  return (
    <div>
      <dl>
        <dt>counter</dt>
        <dd>{counter}</dd>
      </dl>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>remove</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        incrementByAmount
      </button>
    </div>
  )
}

export default Counter
