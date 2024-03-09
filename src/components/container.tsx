import React from 'react'

function container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Container</h1>
      {children}
    </div>
  )
}

export default container
