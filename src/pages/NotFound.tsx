import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/Header/HeaderNav';

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <main className='flex-grow flex justify-center items-center bg-light-gray'>
        <div className='px-40 py-32 rounded flex justify-center items-center'>
          <div className='text-9xl text-orange text-center'>404</div>
          <div className='ml-10 flex flex-col items-center'>
            <div className='text-blue text-2xl'>
              <span className='text-orange'>Oups !</span> Page non trouvée
            </div>
            <div className='text-dark-blue mb-4'>
              La page que vous recherchez n'existe pas.
            </div>
            <Link
              className='bg-blue text-white rounded p-4 py-2 block transition duration-500 hover:scale-110'
              to='/btca-app/'
            >
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
