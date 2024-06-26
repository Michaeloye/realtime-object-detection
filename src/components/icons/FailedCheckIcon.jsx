import React from 'react';

const LightSemiCheckIcon = ({ className }) => {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18.5" cy="18.5" r="17.5" fill="#FF5F56" fillOpacity=".1" />
      <mask id="a" fill="#fff">
        <path d="M18.619 36a17.498 17.498 0 0 0 12.17-29.958A17.5 17.5 0 0 0 18.382 1l.011 1.726a15.775 15.775 0 0 1 .215 31.548L18.619 36Z" />
      </mask>
      <path
        d="M18.619 36a17.498 17.498 0 0 0 12.17-29.958A17.5 17.5 0 0 0 18.382 1l.011 1.726a15.775 15.775 0 0 1 .215 31.548L18.619 36Z"
        fill="#E6E0FF"
        stroke="#FF5F56"
        strokeWidth="6"
        mask="url(#a)"
      />
      <path
        d="M19 20.063a.567.567 0 0 1-.563-.563v-3.75c0-.307.255-.563.563-.563.308 0 .563.256.563.563v3.75a.567.567 0 0 1-.563.563ZM19 22.5c-.045 0-.098-.008-.15-.015a.477.477 0 0 1-.135-.045.568.568 0 0 1-.135-.068l-.112-.09a.789.789 0 0 1-.218-.532c0-.195.082-.39.218-.532l.112-.09a.568.568 0 0 1 .135-.068.477.477 0 0 1 .135-.045.642.642 0 0 1 .292 0 .452.452 0 0 1 .143.045c.045.015.09.038.135.068l.112.09a.789.789 0 0 1 .218.532c0 .195-.082.39-.218.532l-.112.09a.568.568 0 0 1-.135.068.452.452 0 0 1-.143.045.919.919 0 0 1-.142.015Z"
        fill="#FF5F56"
      />
      <path
        d="M23.545 25.62h-9.09c-1.463 0-2.58-.533-3.15-1.492-.563-.96-.487-2.198.225-3.48l4.545-8.175c.75-1.35 1.785-2.093 2.925-2.093s2.175.742 2.925 2.092l4.545 8.183c.713 1.282.795 2.512.225 3.48-.57.952-1.688 1.485-3.15 1.485ZM19 11.505c-.705 0-1.395.54-1.942 1.515l-4.538 8.183c-.51.915-.592 1.755-.24 2.362.353.607 1.133.938 2.183.938h9.09c1.05 0 1.822-.33 2.182-.938.36-.608.27-1.44-.24-2.363l-4.553-8.182c-.547-.975-1.237-1.515-1.942-1.515Z"
        fill="#FF5F56"
      />
    </svg>
  );
};

export default LightSemiCheckIcon;
