import { useEffect, useState } from 'react'
import UserManagment from '../src/pages/UserManagment'
import './App.css'
import Header from './layouts/Header';

function App() {

  return (
    <>
     <Header/>
     <UserManagment/>
    </>
  )
}

export default App
