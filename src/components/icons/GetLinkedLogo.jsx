import Image from "next/image";
import GetLinkedPng from "~/images/get-linked-logo.png";

const GetLinkedLogo = () => {
  return (
    <Image
      src={GetLinkedPng}
      alt="get linked logo"
      className="w-8 h-8 md:w-14 md:h-14"
    />
  );
};

export default GetLinkedLogo;
