import React from 'react';

import { SubHeading } from '../../components';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsleter"/>
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And Neve miss latest updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" name="" id="" placeholder='input your email here'/>
      <button type="button" className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
