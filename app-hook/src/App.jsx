import React from 'react'
import Nav from './components/layout/Nav'
import Foot from './components/layout/Foot'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Notfound from './components/layout/Notfound'
import AboutById from './components/About/AboutById'
import FormFunction from './components/Form/FormFunction'
import ShowChart from './components/About/ShowChart'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chart' element={<ShowChart/>}/>
          <Route path='/about/:id' element={<AboutById/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/create/*' element={<FormFunction/>}/>
          <Route path='*' element={<Notfound />}/>
        </Routes>
      </div>
      <Foot/>
    </div>
  )
}

export default App