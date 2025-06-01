import React, { useState } from "react";
import MenuLinks from "./../utils/MenuLinks";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi2";
import Search from "./../utils/Search";
import { MdMenuOpen } from "react-icons/md";
import Offcanvas from "./../utils/Offcanvas";

const MainHeader = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const showOffcanvas = () => {
    setShowCanvas(true);
  };

  const closeOffcanvas = () => {
    setShowCanvas(false);
  };

  return (
    <nav className="py-5 bg-gray-scale-white main_header_shadow">
      <div className="container grid grid-cols-4 lg:grid-cols-5 items-center">
        <div className="menu col-span-2 hidden lg:block">
          <MenuLinks />
        </div>
        <div className="logo mx-auto col-span-2 lg:col-span-1">
          <Link to="/">
            <img
              className="max-w-[90%] lg:max-w-full"
              src="/public/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="linkedIcon col-span-2 flex place-items-center justify-end gap-3 lg:gap-10">
          <div className="call flex items-center gap-2 font-medium leading-[150%] text-gray-scale-gray-900">
            <Link to="tel:(219) 555-0114">
              <TbPhoneCall className="text-[24px] lg:text-[22px]" />
            </Link>
            <h3 className="text-sm hidden lg:block">(219) 555-0114</h3>
          </div>
          <ul className="flex place-items-center justify-end text-[24px] lg:text-[22px] gap-3 lg:gap-5 font-medium leading-[150%] text-gray-scale-gray-900">
            <li>
              <Search />
            </li>
            <li className="hidden lg:block">
              <Link>
                <GoHeart />
              </Link>
            </li>
            <li className="relative hidden lg:block">
              <Link>
                <SlHandbag />
                <div className="cartCounter absolute top-[-5px] right-[-8px] text-center text-[10px] font-medium leading-[18px] text-gray-scale-white w-[18px] h-[18px] rounded-2xl border border-gray-scale-white bg-branding-success-dark">
                  2
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <HiOutlineUser />
              </Link>
            </li>
          </ul>
          <div className="menuBtn">
            <button
              onClick={showOffcanvas}
              className="lg:hidden text-[28px] font-medium leading-[150%] text-gray-scale-gray-900"
            >
              <MdMenuOpen />
            </button>
            <Offcanvas
              position="left"
              showCanvas={showCanvas}
              closeOffcanvas={closeOffcanvas}
              heading="Ecobazar"
            >
              <MenuLinks />
            </Offcanvas>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
