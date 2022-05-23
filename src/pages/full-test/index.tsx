import React from 'react';
import HeaderNav from '../../components/Header/HeaderNav';
import WiP from '../../components/WiP';

const FullTest = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <WiP title='Test complet' />
    </div>
  );
};

export default FullTest;
