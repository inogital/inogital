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
          <NavigationMenuContent className="bg-slate-900">
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <Icon
                    IconComponent={item.icon}
                   
                    textColor={item.textColor}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-300">
                      {item.name}:
                    </p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" p-4">
              <a
                href="##"
                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-300">
                    inOgital
                  </span>
                </span>
                <span className="block text-sm text-gray-300">
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
