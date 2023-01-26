import React from 'react'

export default function About(props) {
  return (
    <div className='container pt-2 pb-2' style={{ ...props.myStyle, userSelect: 'none', pointerEvents: 'none' }}>
      <h2>Name: Bibek Joshi</h2>
    </div>
  )
}

