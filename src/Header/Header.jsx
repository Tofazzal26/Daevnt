"use client";
import Image from "next/image";
import { Grip } from "lucide-react";
const Header = () => {
  return (
    <div className="bg-[#14111a] ">
      <div className="relative z-10">
        <div className="lg:pt-[10px]">
          <div className="navbar lg:w-[1150px] 2xl:w-[1320px] mx-auto ">
            <div className="navbar-start ">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="text-[14px] font-medium">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-[14px] font-medium">Page</a>
                  </li>
                  <li>
                    <a className="text-[14px] font-medium">Blog</a>
                  </li>
                  <li>
                    <a className="text-[14px] font-medium">Events</a>
                  </li>
                  <li>
                    <a className="text-[14px] font-medium">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-center hidden lg:flex lg:items-center gap-[10px]">
                <Image src={"/logo.svg"} alt="logo" width={45} height={45} />
                <h2 className="text-white text-3xl">Daevnt</h2>
              </div>
            </div>
            <div className="navbar-end lg:space-x-[10px] space-x-1">
              <ul className="menu lg:flex hidden gap-6 menu-horizontal items-center px-1 lg:text-white">
                <li>
                  <a className="text-[16px] font-medium">Home</a>
                </li>
                <li>
                  {" "}
                  <a className="text-[16px] font-medium">Pages</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Blog</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Events</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Contact</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">
                    <Grip size={30} />
                  </a>
                </li>
              </ul>
              <div className="lg:hidden flex items-center gap-2 pr-4">
                <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
                <h2 className="text-white text-lg">Daevnt</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
