import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';
// making a parent class positioned as relative can make the parent class as a reference and whenever we move the child class it will move according to the parent class 
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='images_knife'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
