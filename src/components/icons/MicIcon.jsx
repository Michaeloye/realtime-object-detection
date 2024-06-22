import React from 'react';

const MicIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <rect width="6" height="11" x="9" y="3" stroke="currentColor" strokeLinecap="round" strokeWidth="2" rx="3" />
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 18v3M8 21h8M19 11a7 7 0 1 1-14 0" />
      </g>
    </svg>
  );
};

export default MicIcon;
