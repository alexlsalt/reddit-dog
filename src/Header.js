import React from 'react';

export default function Header({ text }) {
  return (
    <div className='header'>
      <h1>{text}</h1>
      <h3>An app by <a href="https://alexlsalt.github.io/" target="_blank" rel="noreferrer">Alex Morton</a></h3>
    </div>
  )
}