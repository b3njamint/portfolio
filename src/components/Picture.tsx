import React from 'react';

const pfp = require('../images/newpfp.png');


const Picture = () => {
  return <img src={pfp} alt="Logo"
    style={{
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    }}
  />
}
export default Picture;
