import React from 'react'

const UseEffectHookExmaple = () => {
  React.useEffect(() => {
    document.title = 'UseEffect called when a component Rendered'
  })
  return (
    <div>
      <h1>UseEffect Hook Called every time a component is rendered</h1>
    </div>
  )
}

export default UseEffectHookExmaple
