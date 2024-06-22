const PermissionRequiredModal = ({ close }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#00000061] flex items-center justify-center z-[80]">
      <div className="rounded-t-2xl overflow-hidden w-[300px] md:w-[500px] lg:w-[600px]">
        <div className="flex justify-between items-center px-4 md:px-10 py-4 bg-[#b43f45]">
          <h4 className="text-white text-sm md:text-base font-medium">Microphone and Webcam Permission required</h4>
          <button className="px-3 md:px-7 py-2 bg-[#f5f3ff33] text-white rounded-xl" onClick={close}>
            close
          </button>
        </div>

        <div className="px-3 md:px-10 lg:px-28 py-7 bg-white rounded-b-2xl">
          <p className="text-center text-[#b43f45] text-sm">
            Please this page requires access to your microphone and webcam to proceed with the assessment. So kindly
            grant access to your microphone and webcam to proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PermissionRequiredModal;
