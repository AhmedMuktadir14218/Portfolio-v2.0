import React from 'react';
import Image from '../assets/avatar2.svg';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return <section
    className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

    <div className="container mx-auto ">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once}}
          className='text-[32px] font-bold leading-[1] lg:text-[75px]'>
            Muktadir <span>Udoy</span>
          </motion.h1>
          <div className='mb-6 text-[24px] lg:text-[32px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation
              sequence={[
                'programmer',
                2000,
                'Fullsatck Web Developer',
                2000,
                'Web Designer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reprehenderit libero laboriosam dignissimos, provident in nobis suscipit perferendis corrupti, iste dolores excepturi enim!
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/AhmedMuktadir14218">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muktadir-udoy/">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/udoy.khan.397/">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className='pb-36 hidden lg:flex flex-1 max-w-[100%]'>
        {/* <div className='pb-36 hidden lg:flex flex-1 max-w-[320px]'> */}

          <img src={Image} alt="abc" />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
