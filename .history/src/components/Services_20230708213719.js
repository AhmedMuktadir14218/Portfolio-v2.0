/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services =[

  {
    name: "Website Development",
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi alias sunt vel maxime dolor nemo rem quis esse temporibus!',
    link:'learn more',
  }  ,
  {
    name: "Portfolio",
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi alias sunt vel maxime dolor nemo rem quis esse temporibus!',
    link:'learn more',
  }  ,
  {
    name: "Web Designing",
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi alias sunt vel maxime dolor nemo rem quis esse temporibus!',
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
    <section  className='section' id='service'>
      
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>
              I am a freelance Fullstack Developer with over 2 years of experience.
            </h3>
            <button className='btn btn-sm '>See My Work</button>
          </div>

          {/* service */}
          <div className='flex-1'>
          <div>
            {
              services.map((service,index)=>{
                const {name,description,link}=service;
                return <div className='border-b border-white/20 h-[144px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4  className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='bt w-9 h'>
                      <BsArrowUpRight></BsArrowUpRight>
                    </a>
                    <a href="#">{link}</a>
                  </div>
                </div>
              })
            }
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
