import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import img1 from '../assets/cuts.png';
import img2 from '../assets/Screenshot 2023-07-25 130808.png';
import img3 from '../assets/Screenshot 2023-05-18 234905.png';

const Work = () => {
  return (
    <section className='section ' id='work'>
      <div className="container mx-auto ">

        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <motion.div

            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}

            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0
          '>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>

              <p className='max-w-sm mb-16'>
              Here are a few past design projects I've worked on. </p>
              <a href="https://github.com/AhmedMuktadir14218?tab=repositories"><button className='btn btn-sm'>View All project</button></a>
            </div>

            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlap */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>a</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Gents Parlour Website</span></div>
            </div>
          </motion.div>

          <motion.div

            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}

            className='flex-1 flex flex-col gap-y-10 '>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlap */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient '>BookWorms</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Online Book Store</span></div>
            </div>



            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlap */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient '>Doctors Chamber</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Appointment Website</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
