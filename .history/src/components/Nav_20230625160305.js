import React from 'react';
import { BiHomeAlt,BiUser } from "react-icons/bi";
import { BsClipboardData,BsBriefcase , BsChatSquareText} from "react-icons/bs";

import { Link } from 'react-scroll';

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50' >
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-a'>
        
    <Link>
    <BiHomeAlt/>
    </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
