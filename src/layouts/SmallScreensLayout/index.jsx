/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../../components/Header';

const SmallScreenLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default SmallScreenLayout;
