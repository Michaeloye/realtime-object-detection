const MonitorSemiCheckIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 36 36">
      <circle cx="17.5" cy="17.5" r="17.5" fill="#E6E0FF" />
      <mask id="a" fill="#fff">
        <path d="M17.563 35.032a17.5 17.5 0 0 0-.063-35l.003 1.725a15.775 15.775 0 0 1 .057 31.55l.003 1.725Z" />
      </mask>
      <path
        fill="#E6E0FF"
        stroke="#755AE2"
        stroke-width="6"
        d="M17.563 35.032a17.5 17.5 0 0 0-.063-35l.003 1.725a15.775 15.775 0 0 1 .057 31.55l.003 1.725Z"
        mask="url(#a)"
      />
      <path
        stroke="#755AE2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M24.5 17.918v.667c0 2.67-.667 3.33-3.33 3.33h-8.34c-2.662 0-3.33-.668-3.33-3.33V13.83c0-2.662.668-3.33 3.33-3.33H14M17 21.915V25.5M9.5 18.75h15M13.625 25.5h6.75"
      />
      <path
        stroke="#755AE2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M21.395 16.027h-3.57c-1.035 0-1.38-.69-1.38-1.38v-2.64c0-.825.675-1.5 1.5-1.5h3.45c.765 0 1.38.616 1.38 1.38v2.76c0 .765-.615 1.38-1.38 1.38ZM23.683 14.94l-.908-.637v-2.07l.908-.638c.45-.308.817-.12.817.428v2.497c0 .548-.367.735-.817.42Z"
      />
    </svg>
  );
};

export default MonitorSemiCheckIcon;
