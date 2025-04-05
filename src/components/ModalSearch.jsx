import React, { useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function ModalSearch({
  id,
  modalOpen,
  setModalOpen
}) {

  const modalContent = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
        >
          <div className="py-4 px-2">
            {/* Sensor list */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase px-2 mb-2">Capteurs internes du nRF9160 :</div>
              <ul className="text-sm">
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Accéléromètre basse consommation (LIS2DH12)</div>
                      <div className="text-gray-500">Détecte les vibrations et mouvements du navire.</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Accéléromètre à valeur G élevée (MMA8451Q)</div>
                      <div className="text-gray-500">Mesure des valeurs de G élevées.</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Capteur environnemental (BME680)</div>
                      <div className="text-gray-500">Mesure de la température, de l'humidité, de la pression atmosphérique et de la qualité de l'air.</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Capteur de lumière et de couleur (TCS3400)</div>
                      <div className="text-gray-500">Mesure de l'intensité lumineuse et de la couleur ambiante.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* External sensors */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase px-2 mb-2">Capteurs externes :</div>
              <ul className="text-sm">
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Capteur de température DS18B20</div>
                      <div className="text-gray-500">Surveillance de la température de l'eau.</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Capteur de niveau d'eau JSN-SR04T</div>
                      <div className="text-gray-500">Surveillance du niveau d'eau dans les réservoirs.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default ModalSearch;
