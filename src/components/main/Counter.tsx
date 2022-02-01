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
  React.useEffect(() => {
    ;(async () => {
      const res = await fetch('https://api.aniapi.com/v1/user_story', {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzciLCJuYmYiOjE2NDM2NDAzNTQsImV4cCI6MTY0NjIzMjM1NCwiaWF0IjoxNjQzNjQwMzU0fQ.h72wQANXoB7LdREaKF4hS3XO-bOgoIoaWI0wnvcbPLs`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      console.log({ res })
    })()
  }, [])

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
