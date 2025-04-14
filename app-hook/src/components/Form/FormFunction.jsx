import React from 'react'
import {Routes,Route, Link} from "react-router-dom"
import ArticlePage from './Function/ArticlePage'
import RegisterPage from './Function/RegisterPage'

import {useDispatch} from "react-redux"
import {logData} from "../../actions/Counter"
const FormFunction = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='font-bold text-center text-[35px]'>React Hook Form</h1>
        
        <div className='flex fle-row gap-4 items-center justify-center'>
          <Link className='w-[200px] bg-gray-300 hover:bg-gray-500 duration-300 text-center rounded-md py-1' to={"/create/register"}>register</Link>
          <Link className='w-[200px] bg-gray-300 hover:bg-gray-500 duration-300 text-center rounded-md py-1' to={"/create/article"}>article</Link>
        </div>
        <div>
          <button
          onClick={()=>{
            dispatch(logData())
          }}
          className='px-4 py-1 bg-green-400 rounded-md cursor-pointer'>Log</button>
        </div>
        <Routes>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='article' element={<ArticlePage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default FormFunction