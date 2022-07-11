import React, { createContext } from 'react'
import ComA from './Component/ComA'

const FirstName=createContext()
const LastName=createContext()
function App() {
  return (
    <>
    <FirstName.Provider value={"adarsh"}>
    <LastName.Provider value={"Bagade"}>
    <ComA/>
    </LastName.Provider>
    </FirstName.Provider>
  

  
    </>
  )
}

export default App
export {FirstName,LastName}
