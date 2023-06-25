import React from 'react';
import { } from 'react-icon/bi';
import { IconName } from "react-icons/bi";
import { BsCLipboardData,BsBriefcase , BsChatSquare} from 'react-icon/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
  <nav>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px]'>
        
    <Link>
    <BiHomeAlt/>
    </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
