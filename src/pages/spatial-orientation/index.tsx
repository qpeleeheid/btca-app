import React from 'react';
import HeaderNav from '../../components/header/HeaderNav';
import SimpleButton from '../../components/SimpleButton';
import SimpleLink from '../../components/SimpleLink';

const SpatialOrientation = () => {
  return (
    <div className='flex flex-col h-screen'>
      <HeaderNav />
      <main className='flex-grow bg-light-gray'>
        <div className='container'>
          <div className=' py-6 px-10 flex flex-col mx-10'>
            <h1 className='mt-4 text-4xl text-center'>
              Test d'Orientation Spatiale
            </h1>
            <div className='my-2'>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>But</h2>
                <p>
                  Voici un test dans lequel vous devez pouvoir vous représenter
                  mentalement quelle sorte et quelle position prennent
                  différentes figures.
                </p>
              </div>
              <div className='my-2'>
                <h2 className='mb-2 text-2xl'>Définition</h2>
                <p>
                  Sur l’écran 1, deux règles sont présentées. Ces règles
                  déterminent la direction et la couleur des flèches sur l’écran
                  2.{' '}
                  <span className='font-medium'>
                    Vous devez retenir ces règles.
                  </span>{' '}
                  <br />
                  <span className='text-orange'>
                    Les règles vous indiquent dans quelle direction deux flèches
                    doivent pointer.
                  </span>
                  <br />
                  Les flèches peuvent être dirigées vers le{' '}
                  <span className='uppercase'>haut</span> ou vers le{' '}
                  <span className='uppercase'>bas</span>. Elles peuvent aussi
                  être dirigées vers la{' '}
                  <span className='uppercase'>gauche</span> ou vers la{' '}
                  <span className='uppercase'>droite</span>. Elles peuvent être
                  soit <span className='uppercase'>noires</span>, soit{' '}
                  <span className='uppercase'>blanches</span>.
                  <div className='flex'>
                    <div className='text-center mx-2'>
                      <div className='flex'>
                        <img
                          src={require('../../assets/icons/top-right-white.png')}
                          alt='top right white.png'
                        />
                        <img
                          src={require('../../assets/icons/top-right-black.png')}
                          alt='top right black.png'
                        />
                      </div>
                      <h3>Haut Droite</h3>
                    </div>
                    <div className='text-center mx-2'>
                      <div className='flex'>
                        <img
                          src={require('../../assets/icons/top-left-white.png')}
                          alt='top left white.png'
                        />
                        <img
                          src={require('../../assets/icons/top-left-black.png')}
                          alt='top left black.png'
                        />
                      </div>
                      <h3>Haut Gauche</h3>
                    </div>
                    <div className='text-center mx-2'>
                      <div className='flex'>
                        <img
                          src={require('../../assets/icons/bot-right-white.png')}
                          alt='bot right white.png'
                        />
                        <img
                          src={require('../../assets/icons/bot-right-black.png')}
                          alt='bot right black.png'
                        />
                      </div>
                      <h3>Bas Droite</h3>
                    </div>
                    <div className='text-center mx-2'>
                      <div className='flex'>
                        <img
                          src={require('../../assets/icons/bot-left-white.png')}
                          alt='bot left white.png'
                        />
                        <img
                          src={require('../../assets/icons/bot-left-black.png')}
                          alt='bot left black.png'
                        />
                      </div>
                      <h3>Bas Gauche</h3>
                    </div>
                  </div>
                  <br />
                  Vous devez comparer les combinaisons de flèches avec les
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

export default SpatialOrientation;
