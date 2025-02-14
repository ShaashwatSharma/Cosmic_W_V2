import {BrowserRouter , Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './page/index'
import { Signup } from './page/signup'
import { Signin } from './page/signin'
import { Blog } from './page/blog'
import { Article } from './page/article'
import { Profile } from './page/profile'
import { Submit } from './page/submit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/article/:id' element={<Article/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/submit' element={<Submit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
