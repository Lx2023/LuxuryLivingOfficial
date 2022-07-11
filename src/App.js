import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Feedback from './pages/FeedbackForm/FeedbackForm'
import ContactUs from './pages/Contactus/ContactUs'
import Agents from './pages/SignUpAgents/Agents'
import HotelPatners from './pages/HotelPartners/HotelPartners'
import Portfolio from './pages/Portfolio/Portfolio'
import HotelDesc from './pages/HotelsDesc/HotelDesc'
import AboutUs from './pages/AboutUs/AboutUs'
import ClientsForm from './pages/ClientsPreferForm/ClientsForm'
import HotelsCollabs from './pages/HotelCollabs/HotelsCollabs'
import Offers from './pages/Offers/Offers'
import Enquiry from './components/Enquiry/Enquiry'
import ErrorPage from './pages/NotFound/NotFound'
import HotelSectionD from './pages/Portfolio/HotelSectionD/HotelSectionD'
const App = () => {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/*'>
            <Route index element={<Home />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='sign-up-agents' element={<Agents />} />
            <Route path='hotel-partners' element={<HotelPatners />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='hotel-collabs' element={<HotelsCollabs />} />
            <Route path='offers' element={<Offers />} />
            <Route path='luxury-living-clients-preference' element={<ClientsForm />} />

            <Route path='luxury-living-portfolio/' element={<Portfolio />} >
              <Route path='destinations' element={<HotelSectionD />} />
            </Route>
            <Route path='luxury-living-portfolio/:id' element={<HotelDesc />} />

            <Route path='enquire/:id' element={<Enquiry />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App