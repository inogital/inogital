"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";

const SideDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="p-2  bg-rose-100 rounded-full text-rose-500">
        <TiThMenu size={24} />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 h-screen mt-0 w-64 ">
        <DrawerHeader>
          <div className="flex justify-center">
            <Image src="/img/inOgital.png" width={50} height={50} alt="logo" />
          </div>
        </DrawerHeader>
        <div className="flex  flex-col items-center mt-4 space-y-5 ">
          <Link href="/" className="font-semibold text-lg text-slate-600">
            Home
          </Link>
          <HeaderPopOver />
          <Link href="/about" className="font-semibold text-lg text-slate-600">
            About
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
