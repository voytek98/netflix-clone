import React from 'react';

import './LoadingSpinners.css';

export const LoadingCircle = () => {
  return (
    <div className="spinner">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export const LoadingRectangles = () => {
  return (
    <div className="spinner">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}