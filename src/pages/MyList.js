import React from 'react';

import './MyList.css';

const MyList = ()=> {
  return (
    <div className="main-content">
      <div className="my__list">
        <h2 className="my__list__title">My List</h2>
        <p className="my__list__desc">You haven't added any titles to your list yet.</p>
      </div>
    </div>
  )
}

export default MyList;