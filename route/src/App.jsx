import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Career from './components/Career'
import Myself from './components/Myself'
import Details from './components/Details'
import Contact from './components/Contact'
import Nopage from './components/Nopage'
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={ <Home />} />
          <Route path='/home' element={ <Home />} />
           <Route path='/about' element={ <About />} >
             <Route path='aboutcareer' element={ <Career />} />
             <Route path='aboutmyself' element={ <Myself />} />
             <Route path='aboutdetails' element={ <Details />} />
           </Route>
          <Route path='/contact' element={ <Contact/>} />
          <Route path='*' element={ <Nopage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
