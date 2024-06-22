const MicSemiCheckIcon = ({ className }) => {
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
        stroke-width="2"
        d="M20.5 13a2.5 2.5 0 0 0-5 0v4.167a2.5 2.5 0 0 0 5 0V13ZM18 23v2.5m0-2.5a5.834 5.834 0 0 0 5.833-5.833M18 23a5.834 5.834 0 0 1-5.833-5.833m2.5 8.333h6.666"
      />
    </svg>
  );
};

export default MicSemiCheckIcon;
