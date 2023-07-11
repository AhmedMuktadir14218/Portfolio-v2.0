import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">

        <div>
          <div>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>

              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque quo odio, dolores nisi tempore maiores quam enim veniam cupiditate.
              </p>
              <a href="https://github.com/AhmedMuktadir14218?tab=repositories"><button className='btn btn-sm'>View All project</button></a>
            </div>

            {/* image */}
            <div className='group rela'>
              {/* overlap */}
              <div></div>
              {/* img */}
              
              <img src={img1} alt="" />
              <div>BookWorms</div>
              <div><span>Online Book Store</span></div>
            </div>
          </div>

          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
