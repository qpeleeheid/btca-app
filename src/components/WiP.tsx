import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface WiPProps {
  title: string;
}

const WiP: FC<WiPProps> = ({ title }) => {
  return (
    <main className='flex-grow flex justify-center items-center bg-light-gray'>
      <div className='px-40 py-32 rounded flex justify-center items-center'>
        <div className='text-9xl text-orange text-center'>WiP</div>
        <div className='ml-10 flex flex-col items-center'>
          <div className='text-blue text-2xl'>
            La page <span className='text-orange'>"{title}"</span> n'est pas
            encore disponible !
          </div>
          <div className='text-dark-blue mb-4'>
            Elle est en cours de développement, reviens dans quelques jours,
            elle sera peut être disponible.
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
  );
};

export default WiP;
