/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services =[

  {
    name: "Website Development",
    description : 'I will develop website blog webapp in node js react js mern stack',
    link:'learn more',
  }  ,
  {
    name: "Portfolio",
    description : 'We will create a personalized site for your brand. You can be a startup looking for a new site or a company that needs to take the existing site to another level. We are here to make it happen!',
    link:'learn more',
  }  ,
  {
    name: "Web Designing",
    description : 'I value simple content structure, clean design patterns, and thoughtful interactions.',
    link:'learn more',
  }  ,
  {
    name: "Web Application Maintenance",
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi alias sunt vel maxime dolor nemo rem quis esse temporibus!',
    link:'learn more',
  }  

]
const Services = () => {
  return(
    <section  className='section  ' id='service'>
      
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right',0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount:0.7}}

          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>
              I am a freelance Fullstack Developer with over 2 years of experience.
            </h3>
            <button className='btn btn-sm '>See My Work</button>
          </motion.div>

          {/* service */}
          <motion.div
          variants={fadeIn('left',0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount:0.7}}
          className='flex-1'>
          <div>
            {
              services.map((service,index)=>{
                const {name,description,link}=service;
                return <div className='border-b border-white/20 h-[144px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4  className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name}</h4>
                    {/* <p className='font-secondary leading-tight'>{description}</p> */}
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight></BsArrowUpRight>
                    </a>
                    <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
              })
            }
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
