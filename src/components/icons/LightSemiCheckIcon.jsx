import React from 'react';

const LightSemiCheckIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 36 36">
      <circle cx="17.5" cy="17.5" r="17.5" fill="#E6E0FF" />
      <mask id="a" fill="#fff">
        <path d="M17.563 35.032a17.5 17.5 0 0 0-.063-35l.003 1.725a15.775 15.775 0 0 1 .057 31.55l.003 1.725Z" />
      </mask>
      <path
        fill="#E6E0FF"
        stroke="#755AE2"
        strokeWidth="6"
        d="M17.563 35.032a17.5 17.5 0 0 0-.063-35l.003 1.725a15.775 15.775 0 0 1 .057 31.55l.003 1.725Z"
        mask="url(#a)"
      />
      <path
        stroke="#755AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m18 14.918-.802 1.395c-.18.307-.03.562.322.562h.953c.36 0 .502.255.322.563L18 18.832"
      />
      <path
        stroke="#755AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.225 22.53v-.87c-1.725-1.043-3.143-3.075-3.143-5.235 0-3.713 3.413-6.623 7.268-5.783 1.695.376 3.18 1.5 3.952 3.053 1.568 3.15-.082 6.495-2.505 7.957v.87c0 .218.083.72-.72.72h-4.132c-.825.008-.72-.315-.72-.712ZM15.375 25.5a9.606 9.606 0 0 1 5.25 0"
      />
    </svg>
  );
};

export default LightSemiCheckIcon;
