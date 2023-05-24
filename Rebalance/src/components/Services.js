import React from 'react';
import noodel from './images/needle.jpg';
import pat from './images/patyaa.jpg';
import asd from './images/satt.jpg';
import dre from './images/manual.jpg';
import './clinic.css';
import SpecialOffer from './Grandopening';

function Services() {
  return (
    <div className='ser'>
      <SpecialOffer />
      <div className='maintain'>
        <h3 className='serv'>We Offer</h3>
      </div>
      <br>
  </br>
      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>1) Dry needling</h4>
          <h7>It is easy to think of it as a western type of acupuncture, where the treating physiotherapist uses needling alongside their anatomical knowledge and clinical reasoning.</h7>
        </div>
        <div className='image-container'>
          <img src={noodel} alt='pht' />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>2) Kinesiotaping</h4>
          <h7>That's kinesiology tape: a therapeutic tape that's applied strategically to the body to provide support, lessen pain, reduce swelling, and improve performance.</h7>
        </div>
        <div className='image-container'>
          <img src={pat} alt='as' />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>3) Electrotherapy</h4>
          <h7>Electrotherapy is the application of an electric current to the affected area of the body to accelerate healing and reduce swelling and pain.</h7>
        </div>
        <div className='image-container'>
          <img src={asd} alt='asd' />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>4) Manual Therapy</h4>
          <h7>Manual therapy, also known as mobilization or manipulative therapy, is a form of hands-on treatment where a physiotherapist carefully moves the tissues and joints of the body to restore movement and relieve pain.</h7>
        </div>
        <div className='image-container'>
          <img src={dre} alt='asdf' />
        </div>
      </div>
    </div>
  );
}

export default Services;
