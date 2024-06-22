const CheckNotGoodIndicator = ({ icon: Icon, title, topIcon: TopIcon }) => {
  return (
    <div className="relative bg-[#f5f3ff] flex flex-col gap-1.5 justify-center items-center py-3 w-28 rounded-xl">
      <div className="">
        <Icon className="w-10 h-10 text-[#755ae2]" />
      </div>
      <p className="text-xs text-[#4a4a68]">{title}</p>

      <div className="w-4 h-4 rounded-full bg-[#755ae2] absolute top-1.5 right-1.5 flex items-center justify-center">
        <TopIcon className="w-3 h-3 text-white" />
      </div>
    </div>
  );
};

export default CheckNotGoodIndicator;
