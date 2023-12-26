"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import { Button } from "@/components/ui/button";
import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <header className="grid grid-cols-2  lg:grid-cols-3 p-8 items-center">
      <div>
        <Image src="/img/inogital.png" width={50} height={50} alt="logo" />
      </div>
      <div className="hidden lg:flex  items-center space-x-20">
        <Link href="/" className="font-semibold text-lg text-slate-600">
          Home
        </Link>
        <HeaderPopOver />
        <Link href="/about" className="font-semibold text-lg text-slate-600">
          About
        </Link>
      </div>
      <div className="hidden lg:flex  justify-end">
        <Button variant="destructive"> Get Started</Button>
      </div>
      <div className="flex lg:hidden  justify-end">
        <SideDrawer />
      </div>
    </header>
  );
};

export default Header;
