import MainNavigation from '../MainNavigation/MainNavigation'
import Homepage from '../../pages/Homepage/Homepage'
import AllPostsPage from '../../pages/AllPostsPage/AllPostsPage'
import SinglePostPage from '../../pages/SinglePostPage/SinglePostPage'

import { Routes, Route } from "react-router-dom"

import './App.css'
import '../../styles/reset.css'
import '../../styles/common.css'

function App() {

  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/posts' element={<AllPostsPage />}></Route>
        <Route path='/posts/:id' element={<SinglePostPage />}></Route>
      </Routes>
    </>
  )
}

export default App
