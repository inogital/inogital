import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { BsHddNetwork } from 'react-icons/bs';
import { IoLogoGoogle } from 'react-icons/io5';
import { SiGoogleclassroom } from 'react-icons/si';
import { IconType } from "react-icons";
import { VscOrganization } from 'react-icons/vsc';
import { Fragment } from 'react';

const solutions = [
  {
    name: 'Software Development',
    description: 'Top-notch software services',
    href: '/software-development',
    icon: VscOrganization,
    bgColor: "bg-red-200",
    textColor: "text-red-600"
  },
  {
    name: 'Network Engineering',
    description: 'Build labs and ensure connectivity',
    href: '/network-engineering',
    icon: BsHddNetwork,
    bgColor: "bg-green-200",
    textColor: "text-green-600"
  },
  {
    name: 'Google Services Partner',
    description: 'Google Workspace and other services',
    href: '/google-services',
    icon: IoLogoGoogle,
    bgColor: "bg-blue-200",
    textColor: "text-blue-600 "
  },
  {
    name: 'Technology Training',
    description: 'Keep track of your growth',
    href: '/training',
    icon: SiGoogleclassroom,
    bgColor: "bg-amber-200 ",
    textColor: "text-amber-600 "
  },
  {
    name: 'Tech Partner for NPOs',
    description: 'Customized tech solutions for NPOs',
    href: '/npos',
    icon: VscOrganization,
    bgColor: "bg-slate-200",
    textColor: "text-slate-600"
  },
];

type IconProps = {
    IconComponent: IconType, 
    bgColor: string
    textColor: string 
}

function Icon({ IconComponent, bgColor, textColor }: IconProps) {
  return (
    <div className={`p-3 ${bgColor} ${textColor} rounded-xl`}>
      <IconComponent size={28} />
    </div>
  );
}

export default function HeaderPopOver() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? '' : 'text-opacity-90'}
              group inline-flex items-center px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>Solutions</span>
            <HiChevronDown
              className={`${open ? '' : 'text-opacity-70'}
                ml-2 h-6 w-6 text-red-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <Icon IconComponent={item.icon} bgColor={item.bgColor} textColor={item.textColor} />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">inOgital</span>
                    </span>
                    <span className="block text-sm text-gray-500">...cutting-edge technology solutions provider</span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
