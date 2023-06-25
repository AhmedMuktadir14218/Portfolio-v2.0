import React from 'react';
import { BiHomeAlt,BiUser} from 'react-icon/bi';
import { BsCLipboardData,BsBriefcase , BsChatSquare} from 'react-icon/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
  <nav>
    <div className='container mx-auto'>
      <div className='w-full bg-black'>
        
    <Link>
    <BiHomeAlt/>
    </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
