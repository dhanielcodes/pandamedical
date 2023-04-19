import React from 'react';
import LoaderImage from '../themes/assets/images/loader.svg';

const MiniLoader = () => (
  <div className="MiniLoader">
    <img src={LoaderImage} alt="loader" className="MiniLoader-spinner" />
  </div>
);

export default MiniLoader;
