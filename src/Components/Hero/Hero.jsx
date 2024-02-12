import React , {useEffect, useState}from 'react';
import './Hero.css'; // Assuming you have a separate CSS file for styles
import Img6 from '../../assets/Flowers/pngwing.com (6).png';
import Img9 from '../../assets/Flowers/pngwing.com (9).png';
import Img10 from '../../assets/Flowers/pngwing.com (10).png';
import Img11 from '../../assets/Flowers/pngwing.com (11).png';
import Img13 from '../../assets/Flowers/pngwing.com (13).png';
import Img14 from '../../assets/Flowers/pngwing.com (14).png';


const Hero = () => {
  return ( 
    <div className='hero-container h-screen -z-10 w-screen flex items-center justify-center overflow-hidden'>
      <div className="content -z-50">
        {/* //* Have to use two different styles of heading one for mobile and one for desktop */}
        <h1 className='heading-animation'>Arohana</h1>
      </div>
      <div className='-z-10'>
          <img src={Img6} alt="" className='images flower1' />
          <img src={Img10} alt="" className='images flower2' />
          <img src={Img11} alt="" className='images flower3' />
          <img src={Img13} alt="" className='images flower4' />
          <img src={Img9} alt="" className='images flower5' />
          <img src={Img9} alt="" className='images flower8' />
          <img src={Img10} alt="" className='images flower6' />
          <img src={Img6} alt="" className='images flower7' />``
          <img src={Img14} alt="" className='images flower9' />
          <img src={Img9} alt="" className='images flower10' />
          <img src={Img9} alt="" className='images flower11' />
          <img src={Img9} alt="" className='images flower12' />
      </div>
    </div>
  );
}

export default Hero;
