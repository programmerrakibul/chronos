import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="text-xl md:text-2xl font-extrabold primary_linear bg-clip-text text-transparent italic"
      >
        CHRONOS
      </Link>
    </>
  );
};

export default Logo;
