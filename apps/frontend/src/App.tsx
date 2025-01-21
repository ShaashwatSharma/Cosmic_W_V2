import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './pages/landing'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { Article } from './pages/article'

function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Landing/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/article/:id' element={<Article/>}/>
           <Route path='/blog' element={<Blog/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
