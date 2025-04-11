import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import BasicForm from './BasicForm'
import AdvanceForm from './AdvanceForm'
import MyForm from './MyForm'

const SelectForm = () => {

    const location = useLocation();

  return (
    <div className='flex flex-col items-center my-5'>
        <div className='flex flex-row items-center justify-center'>
            <Link to={"/create/basic"} className={`${location.pathname == "/create/basic" ? "bg-yellow-500":""} border-r px-7`}>Basic form</Link>
            <Link to={"/create/advance"} className={`${location.pathname == "/create/advance" ? "bg-yellow-500":""} px-7`}>Advance form</Link>
            <Link to={"/create/myform"} className={`${location.pathname == "/create/myform" ? "bg-yellow-500":""} px-7`}>MUI form</Link>
        </div>
        <Routes>
            <Route path='basic' element={<BasicForm/>}/>
            <Route path='advance' element={<AdvanceForm/>}/>
            <Route path='myform' element={<MyForm/>}/>
        </Routes>
    </div>
  )
}

export default SelectForm