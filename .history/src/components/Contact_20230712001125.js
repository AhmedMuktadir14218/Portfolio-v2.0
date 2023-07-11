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
            <h4 className=''>get in Touch</h4>
            <h2>
              Let's work <br /> together!
            </h2>
          </div>
        </div>
        {/* form */}
        <form className='flex-1' ></form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
