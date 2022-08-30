import React from 'react'

export default function Button({click, children}) { 
  return (
    <button
    className={`
    ${isNaN(children) ? "symbol" : null}
     ${children === "=" ? "clearOrequal" : null}
     ${children === "C" ? "clearOrequal" : null}
     button
     `}
    onClick = {click}>{children}</button>
  )
}
