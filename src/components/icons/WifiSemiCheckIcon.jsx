const WifiSemiCheckIcon = ({ className }) => {
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
        d="M11.682 17.88c3.226-2.49 7.418-2.49 10.643 0M9.5 15.27c4.545-3.51 10.455-3.51 15 0M13.092 20.617c2.363-1.83 5.446-1.83 7.808 0M15.05 23.363c1.185-.915 2.723-.915 3.907 0"
      />
    </svg>
  );
};

export default WifiSemiCheckIcon;
