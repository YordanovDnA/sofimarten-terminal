/* eslint-disable react/prop-types */
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const BigScreenLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default BigScreenLayout;
