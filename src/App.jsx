import { Route, Router } from 'react-router'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />

      </Router>

    </>
  )
}

export default App
