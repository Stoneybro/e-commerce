import Home from './Home/Home'
import Category from './Home/Category'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path=':categoryid' element={<Category />}  />
    </Routes>
      </>
  )
}

export default App
