import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
  // <section  className='py-16 lg:section' id='contact'>
  <section  className='section' id='contact'>
    
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div className='flex-1 flex justify-start item-center'>
          <div>
            <h4 className='text-2xl uppercase text-accent font-medium mb-2 tracking-wide '>get in Touch</h4>

            <h2 className='text-[55px] lg:text[100px] leading-none mb-12 '>
              Let's work <br /> together!
            </h2>
          </div>
        </div>
        {/* form */}
        <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start ' >
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='Your Name'/>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text"  placeholder='Your Email'/>

          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'></textarea>
          <button className='btn btn-lg'>Send message</button>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
