import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-10 pb-9 md:px-[7%] text-sm">
      <span className="text-[#8c8ca1]">POWERED BY </span>
      <Link href="#">
        <span className="font-semibold">Getlinked.AI</span>
      </Link>
    </div>
  );
};

export default Footer;
