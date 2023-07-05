import React from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {

  const [ref,Inview]=useInView({
    threshold:0.5,
  })
  return (
    <section className='section' id='about' ref={ref} >
    <div className="container  mx-auto">
      <div>
        {/* img */}
      </div>
      </div>  
      
    </section>
  );
};

export default About;
