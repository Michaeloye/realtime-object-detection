import React from "react";

const WifiIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="#755AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.683 8.88c3.224-2.49 7.417-2.49 10.642 0M1.5 6.27c4.545-3.51 10.455-3.51 15 0M5.092 11.617c2.363-1.83 5.446-1.83 7.808 0M7.05 14.363c1.185-.915 2.722-.915 3.907 0"
      />
    </svg>
  );
};

export default WifiIcon;
