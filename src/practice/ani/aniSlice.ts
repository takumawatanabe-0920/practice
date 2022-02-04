import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// action type
const LOAD_ALL = 'ani/LOAD_ALL' as const

const fetchUserById = createAsyncThunk(LOAD_ALL, async () => {
  const response = await fetch('https://api.aniapi.com/v1/user_story', {
    method: 'GET',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzciLCJuYmYiOjE2NDM2NDAzNTQsImV4cCI6MTY0NjIzMjM1NCwiaWF0IjoxNjQzNjQwMzU0fQ.h72wQANXoB7LdREaKF4hS3XO-bOgoIoaWI0wnvcbPLs`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  console.log({ response })
  return response
})
