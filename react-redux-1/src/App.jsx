import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reduceuser, users } from './features/AuthReducer';

const App = () => {
let {user}= useSelector((store)=>store.Auth);
let dispatch = useDispatch();
  return (
    <div>
      <h1>redux - {user}</h1>
      <button onClick={()=>dispatch(users("raju"))}>name raju</button>
       <button onClick={()=>dispatch(reduceuser())}>remove name</button>
    </div>
  )
}

export default App