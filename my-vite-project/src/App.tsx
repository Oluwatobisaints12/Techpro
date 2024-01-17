import React from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Completed from './component/Completed'
import Tasks from './component/Tasks'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Important from './component/Important'



function App() {
  const [count, setCount] = React.useState(0)

  return (
  <BrowserRouter>
  <Sidebar>
  <Routes>
    <Route path="/"element={<Important/>}/>
    <Route path="/important"element={<Important/>}/>

    <Route path="/completed"element={<Completed/>}/>
    <Route path="/tasks"element={<Tasks/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
  )
}

export default App
