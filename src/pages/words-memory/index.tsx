import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../../components/header/HeaderNav';

const WordsMemory = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default WordsMemory;
