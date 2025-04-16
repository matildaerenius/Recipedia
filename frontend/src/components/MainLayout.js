
import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
