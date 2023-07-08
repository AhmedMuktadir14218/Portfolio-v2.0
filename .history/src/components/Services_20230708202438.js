import React from 'react';
import {BsArrowUpRight} from 'react-icon/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services =[

  {
    name: "Website Development",
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi alias sunt vel maxime dolor nemo rem quis esse temporibus!',
    link:'learn more',
  }  

]
const Services = () => {
  return(
    <div  className='section' id='service'>Services</div>
  );
};

export default Services;
