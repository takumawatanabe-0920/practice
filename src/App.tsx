import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseEffectHookExmaple from '@practice/useEffect'
import Counter from '@components/main/Counter'

const App = () => (
  <Routes>
    <Route path='/useEffect' element={<UseEffectHookExmaple />} />
    <Route path='/counter' element={<Counter />} />
  </Routes>
)

export default App
