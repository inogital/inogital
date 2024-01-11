

import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import SideDrawer from "./SideDrawer";
import RequestForm from "./RequestForm";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white grid grid-cols-2  lg:grid-cols-3 p-8 items-center">
      <div>
        <Image src="/img/inOgital.png" width={50} height={50} alt="logo" />
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
        <RequestForm/>
      </div>
      <div className="flex lg:hidden  justify-end">
        <SideDrawer />
      </div>
    </header>
  );
};

export default Header;
