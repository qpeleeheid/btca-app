import React from 'react';
import HeaderNav from '../components/Header/HeaderNav';
import WiP from '../components/WiP';

const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <WiP title='Accueil' />
    </div>
  );
};

export default Home;
