import React from 'react';
import imgAb from '../assets/about.png';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {

  const [ref, Inview] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref} >
      <div className="container  mx-auto">
        <div>
          {/* img */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            {/* <img src={imgAb} alt="asd" /> */}
          </div>

          {/* text */}

          <div>
            <h2>
              About Me
            </h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
