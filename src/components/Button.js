import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
  return (
    <>
      <Link to="/join-us" className="blm">
        <button Link to="/movies" className="btn">
          JOIN-US
        </button>
      </Link>
      
    </>
  );
}

export default Button;