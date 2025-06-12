import { Route, Routes } from 'react-router'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'

import Products from './component/Bankin_Products/Products'
import About from './component/About/About'
import Eservices from './component/Eservices/Eservices'
import CustomerCare from './component/Customer/CustomerCare'
import InternetBanking from './component/InternetBaking/InternetBanking'
import CustomerGrievace from './component/CustomerGrievace/CustomerGrievace'
import Footer from './component/Footer/Footer'
import Main from './component/Main/Main.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/bankingproduct' element={<Products />} />
        <Route path='/eservice' element={<Eservices />} />
        <Route path='/customercare' element={<CustomerCare />} />
        <Route path='/internetbanking' element={<InternetBanking />} />
        <Route path='/customergrievance' element={<CustomerGrievace />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
