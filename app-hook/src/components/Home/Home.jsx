import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {setCountValue,decrement,increment} from "../../actions/Counter"
const Home = () => {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch(); 
  const [value,setValue] = useState();
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div>{count}</div>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Dncrement</button>
        <form
         className='flex flex-row gap-2 items-center justify-center'
         onSubmit={(e)=>{
          e.preventDefault()
          dispatch(setCountValue(value))
          setValue("")
        }}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="count">Count</label>
            <input className='px-2 py-1 border rounded-lg' type="number" id="count" value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
          </div>
          <button className='bg-green-500 px-4 py-2 rounded-lg cursor-pointer'>Set Value</button>
        </form>
      </div>
    </>
  )
}

export default Home