import React from 'react';
//import images
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
//import link
import {Link } from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';

const Portfolio = () => {
  return(
    <motion.section 
    initial={{opacity:0, y:'100%'}} 
    animate={{opacity:1, y:0}} 
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center 
      lg:text-left pt-24 lg:pt-36 pb-8'>
        {/*text*/}
        <motion.div 
        initial={{opacity:0, y:'-80%'}} 
        animate={{opacity:1, y:0}} 
        exit={{opacity:0, y:'-80%'}}
        transition={transition1}
        className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p>Photography has been my lifelong love affair, and I feel incredibly fortunate to turn that passion into a profession. <br/>
            I specialize in portrait photography, landscape photography, wedding photography, and I find inspiration in the world around me. <br/>
            My journey as a photographer has been a thrilling adventure. When I'm not behind the camera, you can find me hiking in the <br/>
            mountains, exploring new cities, or experimenting with new photography techniques. <br />Thank you for considering me to be a part of your photography journey. 
            I'm excited to meet you, hear your story, and create timeless memories together. <br/>Feel free to reach out, and let's embark on this photographic journey together.
            <br />Let's capture moments that matter.
            <br />
          </p>
          <br/>
          <br/>
          <Link to= {'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire Me</Link>
        </motion.div>
        {/*image grid*/}
        <div className='grid grid-cols-2 lg:gap-2'> 
          {/* image */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all
            duration-500' src={Image1} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all
            duration-500' src={Image2} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all
            duration-500' src={Image3} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all
            duration-500' src={Image4} alt='' />
          </div>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;

