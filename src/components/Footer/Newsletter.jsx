import React from 'react';

import './Newsletter.css';

import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newletter-heading'>
      <SubHeading title={"Newsletter"}/>
      <h1 className='headtext__cormorant'>Subscribe To Our News Letter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your E-mail Address'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
