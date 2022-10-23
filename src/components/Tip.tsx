import * as React from 'react';
import TipIcon from '../assets/svgs/tip.svg';
import './styles.scss';

function Tip({ className, onclick }) {
  return (
    <button
      type="button"
      onClick={onclick((prev) => !prev)}
      className={`${className} bg-transparent border-none`}
    >
      <img className="sm:w-10 w-6" src={TipIcon} alt="Tip" />
    </button>
  );
}

export default Tip;
