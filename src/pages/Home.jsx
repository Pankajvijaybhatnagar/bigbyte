import React from 'react'
import { ToastContainer} from 'react-toastify';
import Header from '../components/Home/Header';
import About from '../components/Home/About';
import Sectors1 from '../components/Home/Sectors1';
import Projects from '../components/Home/Projects';
import OurApproach from '../components/Home/OurApproach';
import Testimonials from '../components/Home/Testimonials';
import Contact from '../components/Home/Contact';
import Partners from '../components/Home/Partners';




const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <ToastContainer/>
      <About/>
      <Sectors1/>
      <Projects/>
      <OurApproach/>
      <Testimonials/>
      <Contact/>
      <Partners/>
     
    </div>
  )
}

export default Home
