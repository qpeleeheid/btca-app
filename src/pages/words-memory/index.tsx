import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../../components/header/HeaderNav';
import SimpleButton from '../../components/SimpleButton';
import SimpleLink from '../../components/SimpleLink';

const WordsMemory = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <main className='flex-grow bg-light-gray'>
        <div className='container'>
          <div className=' py-6 px-10 flex flex-col mx-10'>
            <h1 className='mt-4 text-4xl text-center'>
              Test de Mémoire des mots
            </h1>
            <div className='my-2'>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>But</h2>
                <p>
                  Par ce test, nous allons voir si vous êtes capable de retenir
                  des mots et si par la suite, vous savez exécuter une tâche
                  vite et bien.
                </p>
              </div>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>Définition</h2>
                <p>
                  Sur le premier écran,{' '}
                  <span className='text-orange'>
                    trois règles sont proposées
                  </span>
                  . Vous devez retenir ces règles. Sur le second écran, trois
                  mots sont proposés. Vous comparez (mentalement) la{' '}
                  <span className='uppercase'>succession</span>
                  des mots avec la <span className='uppercase'>
                    succession
                  </span>{' '}
                  des règles et vous décidez combien de mots correspondent aux
                  règles.
                </p>
              </div>
              <SimpleLink title='Voir un exemple' relativePath='example' />
            </div>
            <SimpleButton title='Commencer le test' relativePath='test' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WordsMemory;
