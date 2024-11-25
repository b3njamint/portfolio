import React from 'react';

const pfp = require('../images/pfp.jpg');


const Picture = () => {
  return <img src={pfp} alt="Logo"
    style={{
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    }}
  />
}
export default Picture;
