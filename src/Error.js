import React from 'react';
import image from './newSearch.png';
import Header from './Header';
import './Error.css';

export default function Error({ onClick }) {
  return (
    <div className='error-new-search'>
      <Header text="Reddit Dog Error!" />
      <img src={image} className='new-search-image' alt='dog' />
      <button className='new-search-button' onClick={onClick}>New search?</button>
    </div>
  )
}