import Loader from '~/components/Loader';

const CheckIndicator = ({ icon: Icon, title, loading = false }) => {
  return (
    <div className="relative bg-[#f5f3ff] flex flex-col gap-1.5 justify-center items-center py-3 w-28 rounded-xl overflow-hidden">
      <div className="rounded-full p-2 bg-[#e6e0ff]">
        <Icon className="w-6 h-6 text-[#755ae2]" />
      </div>
      <p className="text-xs text-[#4a4a68]">{title}</p>

      <div className="w-4 h-4 rounded-full bg-[#755ae2] absolute top-1.5 right-1.5"></div>

      {loading && (
        <div className="h-full w-full bg-gray-600/20 absolute top-0 left-0 flex items-center justify-center">
          <Loader className="w-5 h-5 fill-white" />
        </div>
      )}
    </div>
  );
};

export default CheckIndicator;
