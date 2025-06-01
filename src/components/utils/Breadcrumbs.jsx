import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


const Breadcrumbs = ({url, title}) => {
  return (
    <div
      id="breadcrumbs"
      className="bg-[url(/public/images/Breadcrumbs.png)] py-[28px]"
    >
      <div className="container text-gray-scale-gray-400 leading-[150%] flex items-center justify-start gap-3">
        <NavLink to="/" className="text-[24px]">
          <IoHomeOutline />
        </NavLink>
        <NavLink>
          <MdOutlineKeyboardArrowRight />
        </NavLink>
        <NavLink to={url} className="capitalize text-branding-success">{title}</NavLink>
      </div>
    </div>
  );
};

export default Breadcrumbs;
