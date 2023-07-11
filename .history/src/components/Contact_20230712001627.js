import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
  <section  className='py-16 lg:section' id='contact'>
    
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div className='flex-1'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide '>get in Touch</h4>

            <h2 className='text-[45px] lg:text[90px] leading-nonemb-12 '>
              Let's work <br /> together!
            </h2>
          </div>
        </div>
        {/* form */}
        <form className='flex-1' >
          <input className='bg-transparent border-b py-3 outline-none w-full pla' type="text" name="" id="" />
        </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
