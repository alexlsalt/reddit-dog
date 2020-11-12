import React from 'react';
import image from './newSearch.png';
import './Error.css';

export default function Error({ onClick }) {
  return (
    <div className='error-new-search'>
      <img src={image} className='new-search-image' alt='dog' />
      <button className='new-search-button' onClick={onClick}>New search?</button>
    </div>
  )
}