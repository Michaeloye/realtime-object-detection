const CheckIndicator = ({ icon: Icon, title }) => {
  return (
    <div className="relative bg-[#f5f3ff] flex flex-col gap-1.5 justify-center items-center py-3 w-28 rounded-xl">
      <div className="rounded-full p-2 bg-[#e6e0ff]">
        <Icon className="w-6 h-6 text-[#755ae2]" />
      </div>
      <p className="text-xs text-[#4a4a68]">{title}</p>

      <div className="w-4 h-4 rounded-full bg-[#755ae2] absolute top-1.5 right-1.5"></div>
    </div>
  );
};

export default CheckIndicator;
