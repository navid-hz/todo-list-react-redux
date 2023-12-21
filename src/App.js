import React from 'react'
import style from './App.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'

//Components
import BottomNavigation from './components/BottomNavigation'
import AddTodo from './components/AddTodo'
import ListOfTodos from './components/ListOfTodos'

function App() {
  return (
    <main>
      <BottomNavigation />
      <Routes>
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/list-of-todos" element={<ListOfTodos />} />
        <Route path="/" element={<Navigate to="/add-todo" />} />
      </Routes>

    </main>
  )
}

export default App