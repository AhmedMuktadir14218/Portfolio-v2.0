/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../assets/logo3.png'
import { Link } from 'react-scroll';
import resume from "../assets/MUKTADIR UDOY CV Resume_4.pdf";
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
          <button className='btn btn-lg'>My CV/Resume</button>
        </a>
          </div>
      </div>
    </div>
  );
};

export default Header;