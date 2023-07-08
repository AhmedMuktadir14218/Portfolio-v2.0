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
      
      <div className="container max-auto">
        <div>
          {/* text */}
          <div>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>
              I am a freelance Fullstack Developer with over 2 years of experience.
            </h3>
            <button className='btn btn-sm '>See My Work</button>
          </div>

          {/* service */}
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
