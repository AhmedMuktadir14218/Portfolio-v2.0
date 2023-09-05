/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../assets/logo3.png'
import { Link } from 'react-scroll';
import resume from "../assets/";
const Header = () => {
  return (
    <div className='py-8'>
      
      <div className="container mx-auto">
          <div className='flex justify-between items-center '>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
            
      {/* <a href={resume} download="Resume"> */}
            {/* <button className='btn btn-lg'> <Link 
    activeClass='active'
    smooth={true}
    spy={true}>
      
      
  
    </Link></button>  */}
    <a href={resume}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer">
          <button className='btn btn-lg'>Work with me</button>
        </a>
    {/* </a> */}
            {/* <button className='btn btn-sm'>Work with me</button> */}
          </div>
      </div>
    </div>
  );
};

export default Header;