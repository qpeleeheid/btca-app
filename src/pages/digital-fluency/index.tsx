import React from 'react';
import HeaderNav from '../../components/header/HeaderNav';
import SimpleButton from '../../components/SimpleButton';
import SimpleLink from '../../components/SimpleLink';

const DigitalFluency = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <main className='flex-grow bg-light-gray'>
        <div className='container'>
          <div className=' py-6 px-10 flex flex-col mx-10'>
            <h1 className='mt-4 text-4xl text-center'>
              Test d'Aisance Numérique
            </h1>
            <div className='my-2'>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>But</h2>
                <p>
                  Voici un exercice pour mesurer la vitesse et la précision avec
                  laquelle les gens peuvent exécuter mentalement des tâches
                  numériques.
                </p>
              </div>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>Définition</h2>
                <p>
                  Une première opération est présentée. Calculez mentalement la
                  solution et <span className='font-medium'>retenez-la</span>.
                  <br />
                  Sur l’écran suivant est présentée une seconde opération.
                  Calculez et{' '}
                  <span className='font-medium'>
                    retenez également la solution
                  </span>{' '}
                  de cette opération.
                  <br />
                  Sur le troisième et dernier écran, vous devez dire laquelle
                  des deux solutions est la{' '}
                  <span className='font-medium uppercase'>plus grande</span> ou
                  dire que les solutions sont toutes deux{' '}
                  <span className='font-medium uppercase'>égales</span>.
                  <br />
                  <span className='text-orange'>
                    Si la ligne Supérieure est plus grande, indiquez S. Si la
                    ligne Inférieure est plus grande, indiquez alors I. Si les
                    deux solutions sont Egales, indiquez E.
                  </span>
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

export default DigitalFluency;
