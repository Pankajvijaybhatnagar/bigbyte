import React from 'react'
import AboutIntro from '../components/Aboutus/AboutIntro'
import WhyChooseUs from '../components/Aboutus/WhyChooseUs'
import AboutVision from '../components/Aboutus/AboutVision'
import BigByteAdvantages from '../components/Aboutus/BigByteAdvantages'
const Aboutus = () => {
    return (
      <div className='w-full overflow-hidden'>
        <AboutIntro/>
        <AboutVision/>
        <WhyChooseUs/>
        <BigByteAdvantages/>
       
      </div>
    )
  }
  
  export default Aboutus
  
  