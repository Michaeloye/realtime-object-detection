const TimeIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      fill="none"
    >
      <path
        stroke="#755AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 5.333v3.334M8 14.667a5.836 5.836 0 0 1-5.833-5.834A5.835 5.835 0 0 1 8 3a5.835 5.835 0 0 1 5.833 5.833"
      />
      <path
        stroke="#755AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M6 1.333h4M9.933 12.333v-.773c0-.953.68-1.347 1.507-.867l.667.387.666.387c.827.48.827 1.26 0 1.74l-.666.386-.667.387c-.827.48-1.507.087-1.507-.867v-.78Z"
      />
    </svg>
  );
};

export default TimeIcon;
