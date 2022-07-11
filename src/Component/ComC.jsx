import React, { useContext } from 'react'
import { FirstName , LastName} from '../App'

function ComC() {
    const fn=useContext(FirstName)
    const ln=useContext(LastName)
  return (
    <>
<h1> My name is {fn} {ln}</h1>
    </>
  )
}

export default ComC