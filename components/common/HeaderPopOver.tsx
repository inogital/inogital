'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { solutions } from "@/components/common/data";
import { Icon } from "./IconComponent";
import Link from "next/link";



export default function HeaderPopOver() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-lg text-slate-600">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none "
                >
                  <Icon
                    IconComponent={item.icon}
                   
                    textColor={item.textColor}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-500">
                      {item.name}:
                    </p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" p-4">
              <a
                href="##"
                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none "
              >
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-500">
                    inOgital
                  </span>
                </span>
                <span className="block text-sm text-gray-400">
                  ...cutting-edge technology solutions provider
                </span>
              </a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
