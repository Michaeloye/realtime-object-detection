'use client';

import { useState } from 'react';
import GetLinkedLogo from '~/components/icons/GetLinkedLogo';
import TimeIcon from '~/components/icons/TimeIcon';
import EyeIcon from '~/components/icons/EyeIcon';
import EyeHiddenIcon from '~/components/icons/EyeHiddenIcon';

const Nav = () => {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer((prev) => !prev);
  };

  return (
    <div className="w-full py-5 px-7 md:px-[5%] bg-white flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <GetLinkedLogo />
        <div>
          <h1 className="md:text-xl font-medium">Frontend developer</h1>
          <p className="text-sm md:text-base text-[#8c8ca1]">Skill assessment test</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div className="bg-[#ece8ff] rounded-xl py-2 px-5 flex justify-center items-center gap-2">
          <div className="rounded-full p-1.5 bg-[#e6e0ff]">
            <TimeIcon className="w-5 h-5" />
          </div>

          <h4 className="text-[#755ae2] text-base md:text-lg">
            {showTimer ? <span className="font-semibold">29:10</span> : <span className="font-semibold">*****</span>}{' '}
            time left
          </h4>
        </div>

        <button className="rounded-full p-1.5 bg-[#e6e0ff]" onClick={toggleTimer}>
          {showTimer ? (
            <EyeIcon className="w-5 h-5 text-[#755ae2]" />
          ) : (
            <EyeHiddenIcon className="w-5 h-5 text-[#755ae2]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Nav;
