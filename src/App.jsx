import React from 'react'
import Navebar from './components/Navebar'
import AddUser from './components/AddUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowAllDate from './components/ShowAllDate'
import UserData from './components/UserData'
import UpDate from './components/UpDate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path='/' element={<AddUser />} />
          <Route path='/ShowAll' element={<ShowAllDate />} />
          <Route path='/UserData' element={<UserData />} />
          <Route path='/upDate/:id' element={<UpDate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
