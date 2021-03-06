import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-auto px-5">
        {/* Left */}
        <div className="hidden lg:inline-grid relative w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="lg:hidden relative w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 block w-full pl-10 text-sm md:text-base rounded-md border-gray-300 focus:ring-black focus:border-black"
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="nav-btn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative nav-btn ">
            <PaperAirplaneIcon
              className="rotate-45 h-6"
              style={{ marginTop: "-2.5px", marginRight: "-3px" }}
            />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="nav-btn" />
          <UserGroupIcon className="nav-btn" />
          <HeartIcon className="nav-btn" />

          <img
            src="https://links.papareact.com/3ke"
            alt="Profile"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
