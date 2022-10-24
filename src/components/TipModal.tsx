import * as React from 'react';
import './styles.scss';

function TipModal({ className, isModalVisisble = true }) {
  return (
    <div
      className={`${className} ${
        isModalVisisble ? 'inline' : 'hidden'
      } bg-primary tip-modal`}
    >
      <h1 className="text-white sm:text-2xl text-lg">Tip</h1>
      <div className="text-white sm:text-lg text-sm">
        - Hold shift key & click 'c' to close the sideBar manu
      </div>
      <div className="text-white sm:text-lg text-sm">
        - Hold shift key & click 'o' to open the sideBar manu
      </div>
    </div>
  );
}

export default TipModal;
