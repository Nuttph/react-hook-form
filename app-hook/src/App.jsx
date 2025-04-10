import React from 'react'
import Nav from './components/layout/Nav'
import Foot from './components/layout/Foot'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Notfound from './components/layout/Notfound'
import AboutById from './components/About/AboutById'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/About/:id' element={<AboutById/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<Notfound />}/>
        </Routes>
      </div>
      <Foot/>
    </div>
  )
}

export default App