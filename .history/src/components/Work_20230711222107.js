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
              <a href=""><button>View All project</button></a>
                <button></button>
            </div>

            {/* image */}
            <div>image</div>
          </div>
          
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
