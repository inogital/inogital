"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { solutions } from "@/components/common/data"
import Link from "next/link"
import { Icon } from "./icon-component"

export default function HeaderPopOver() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-lg text-slate-600 hover:text-slate-900 transition-colors">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none"
                >
                  <Icon IconComponent={item.icon} textColor={item.textColor} className="flex-shrink-0 h-6 w-6 mr-4" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="bg-gray-50 p-4">
              <Link
                href="/about"
                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
              >
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">inOgital</span>
                </span>
                <span className="block mt-1 text-sm text-gray-500">...cutting-edge technology solutions provider</span>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

