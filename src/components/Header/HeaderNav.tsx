import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';

const HeaderNav = () => {
  return (
    <header className='bg-blue shadow-xl'>
      <nav className='container mx-auto p-4 flex items-center justify-between flex-w'>
        <Link className='flex items-center mx-4' to='/btca-app/'>
          <img
            className='h-16'
            src={require('../../assets/img/Coats_of_arms_of_Belgium_Military_Forces.png')}
            alt='Coats of arms of Belgium Military Forces'
          />
          <h1 className='ml-4 text-2xl font-bold text-white'>BTCA App</h1>
        </Link>

        <div>
          <HeaderLink
            title='Aisance Numérique'
            path='/btca-app/digital-fluency'
          />
          <HeaderLink
            title='Orientation Spatiale'
            path='/btca-app/spatial-orientation'
          />
          <HeaderLink title='Mémoire des mots' path='/btca-app/words-memory' />
          <HeaderLink title='Raisonnement' path='/btca-app/reasoning' />
          <HeaderLink
            title="Détection d'erreurs"
            path='/btca-app/errors-detection'
          />
          <HeaderLink title='Test Complet' path='/btca-app/full-test' />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
