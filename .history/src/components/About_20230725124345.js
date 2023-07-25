/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import imgAb from '../assets/about.png';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref} >
      <div className="container  mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            {/* <img src={imgAb} alt="asd" /> */}
          </div>

          {/* text */}

          <div className='flex-1'>
            <h2 className='h2 text-accent'>
              About Me
            </h2>
            <h3 className='h3 mb-4'>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className='mb-6'>
              I am  an experienced Frontend Web Developer with mastery in React Js, HTML, CSS, JavaScript, and Bootstrap. I take pride in transforming designs into pixel-perfect frontend websites. My code is well-structured, cross-browser compatible, valid, adaptive, and easy to maintain.
            </p>

            {/* state */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {
                    inView ?
                    <CountUp start={0} end={2} duration={7} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience 
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {
                    inView ?
                    <CountUp start={0} end={150} duration={7} /> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/> Completed 
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {
                    inView ?
                    <CountUp start={0} end={70} duration={7} /> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br/> Clients 
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                Contact me
              </button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
