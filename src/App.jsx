import { Route, Routes } from 'react-router'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home.jsx'

import Products from './component/Bankin_Products/Products'
import About from './component/About/About'
import Eservices from './component/Eservices/Eservices'
import CustomerCare from './component/Customer/CustomerCare'
import InternetBanking from './component/InternetBaking/InternetBanking'
import CustomerGrievace from './component/CustomerGrievace/CustomerGrievace'
import Footer from './component/Footer/Footer'
import Main from './component/Main/Main.jsx'
import GotoTop from './component/GotoTop/GotoTop.jsx'
import DarkLight, { ThemeContext, ThemeProvider } from './component/DarkLight/DarkLight.jsx'
import { useContext } from 'react'
import Popoffer from './component/PopOffer/Popoffer.jsx'

function App() {

  const theme = useContext(ThemeContext);

  return (
    <>





      <ThemeProvider >

        <Header />

        <DarkLight />
        {/* <Popoffer /> */}

        <Routes>
          <Route path='/' element={<Main value={theme} />} />
          <Route path='/about' element={<About />} />
          <Route path='/bankingproduct' element={<Products />} />
          <Route path='/eservice' element={<Eservices />} />
          <Route path='/customercare' element={<CustomerCare />} />
          <Route path='/internetbanking' element={<InternetBanking />} />
          <Route path='/customergrievance' element={<CustomerGrievace />} />

        </Routes>

        <GotoTop />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
