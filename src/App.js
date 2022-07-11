import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber} from './action'

function App() {
  const mystate=useSelector((state)=>state. Reducer)
  const dispatch=useDispatch()
    
  return (
    <center>

   
   <input value={mystate}/>
   <button onClick={()=> dispatch(incNumber())}>INCREMENT</button>
   <button onClick={()=>dispatch(decNumber())}>DECREMENT</button>
    </center>
  )
}

export default App