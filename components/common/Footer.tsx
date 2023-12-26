import Link from "next/link";
import Image from "next/image";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-slate-200  mx-auto px-12">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center  text-slate-600 p-12 ">
        <div className="flex items-center ">
          <Image src="/img/inOgital.png" width={150} height={150} alt="logo" />
        </div>

        <div className=" flex flex-col space-y-2">
          <h2 className="font-semibold">Quick Links</h2>
          <Link href="/software-development">Software Development</Link>
          <Link href="/google-services">Google Services</Link>
          <Link href="/training">Training</Link>
          <Link href="/npos">Non-Profit</Link>
        </div>

        <div className="flex items-center space-x-5">
          <Link href="/https://www.linkedin.com/company/inogital">
            <BiLogoLinkedinSquare size={28} />
          </Link>
          <Link href="/https://www.facebook.com/inOgital">
            <BsFacebook size={28} />
          </Link>
          <Link href="/https://twitter.com/inogital">
            <FaXTwitter size={28} />
          </Link>
        </div>
      </section>
      <section className="flex pb-12 text-slate-600   justify-center">
        <p>© {Year} inOgital. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
