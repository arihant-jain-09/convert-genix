import React from 'react';

import './custombutton.scss';

const CustomButton = ({ children,isGoogleSignin, ...otherProps }) => (
  <button className={`${isGoogleSignin ? 'google-sign-in': ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
