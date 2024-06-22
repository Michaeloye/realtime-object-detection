import React from 'react';

const StartAssessmentModal = ({ close, proceed }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#00000061] flex items-center justify-center z-[80]">
      <div className="rounded-t-2xl overflow-hidden w-[300px] md:w-[500px] lg:w-[600px]">
        <div className="flex justify-between items-center px-4 md:px-10 py-4 bg-[#755ae2]">
          <h4 className="text-white text-sm md:text-base font-medium">Start assessment</h4>
          <button className="px-3 md:px-7 py-2 bg-[#f5f3ff33] text-white rounded-xl" onClick={close}>
            close
          </button>
        </div>

        <div className="px-3 md:px-10 lg:px-28 py-7 bg-[#f5f3ff]">
          <h4 className="text-[#755ae2] text-lg font-semibold mb-2 text-center">Proceed to start assessment</h4>
          <p className="text-center text-[#755ae2] text-sm">
            Kindly keep to the rules of the assessment and sit up, stay in front of your camera/webcam and start your
            assessment.
          </p>
        </div>

        <div className="py-5 px-10 bg-white flex justify-center md:justify-end rounded-b-2xl">
          <button className="py-3 px-7 bg-[#755ae2] text-white rounded-xl" onClick={proceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartAssessmentModal;
