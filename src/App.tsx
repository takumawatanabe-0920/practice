import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseEffectHookExmaple from '@practice/useEffect'

const App = () => (
  <Routes>
    <Route path='/useEffect' element={<UseEffectHookExmaple />} />
  </Routes>
)

export default App
