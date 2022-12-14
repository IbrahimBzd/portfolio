import * as React from 'react';

function FbIcon({ className }) {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.003 12.075C24.003 5.406 18.63 0 12.003 0C5.373 0.0015 0 5.406 0 12.0765C0 18.102 4.389 23.097 10.125 24.003V15.5655H7.08V12.0765H10.128V9.414C10.128 6.3885 11.9205 4.7175 14.661 4.7175C15.975 4.7175 17.3475 4.953 17.3475 4.953V7.923H15.834C14.3445 7.923 13.8795 8.8545 13.8795 9.81V12.075H17.2065L16.6755 15.564H13.878V24.0015C19.614 23.0955 24.003 18.1005 24.003 12.075Z"
        fill="#FFC14A"
      />
    </svg>
  );
}

export default FbIcon;
