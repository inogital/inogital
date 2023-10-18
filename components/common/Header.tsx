"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";

const Header = () => {
  return (
    <header className="grid grid-cols-2  lg:grid-cols-3 p-8 items-center">
      <div>
        <Image src="/img/inOgital.png" width={75} height={40} alt="logo" />
      </div>
      <div className="hidden lg:flex  items-center space-x-20">
        <Link href="/" className="font-semibold  text-slate-600">
          Home
        </Link>
        <HeaderPopOver />
        <Link href="/about" className="font-semibold  text-slate-600">
          About
        </Link>
      </div>
      <div className="flex justify-end">
        <button className="inline-flex items-center justify-center  px-4 py-2  text-white bg-red-500 rounded-2xl ">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
