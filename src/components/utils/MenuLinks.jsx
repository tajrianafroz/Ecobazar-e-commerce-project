import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const MenuLinks = () => {
  const [menus, setMenus] = useState([
    { id: 1, name: "Home", path: "/" },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
      subMenus: null,
    },
    { id: 3, name: "Blog", path: "/blog" },
    { id: 4, name: "Contact", path: "/contact" },
  ]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const newMenus = [...menus];
        newMenus[1].subMenus = data;
        setMenus(newMenus);
      });
  }, []);

  return (
    <ul
      id="menuBar"
      className="menuLinks lg:flex items-center justify-start gap-[27px]"
    >
      {menus.map((menu) => (
        <li key={menu.id} className="relative group pb-3 lg:pb-0">
          <NavLink
            className="text-sm font-medium text-gray-scale-gray-500 hover:text-branding-success leading-[150%]"
            to={menu.path}
          >
            {menu.name}
          </NavLink>
          {menu.subMenus && (
            <ul
              id="subMenuOptions"
              className="subMenu group-hover:opacity-100 group-hover:visible mt-6 group-hover:mt-0 transition-all duration-300 opacity-0 invisible absolute bg-white z-10 px-5 py-3 rounded-sm border-1 border-gray-scale-gray-200 min-w-[200px]"
            >
              {menu.subMenus.map((subMenu) => (
                <li key={subMenu.slug} className="my-1">
                  <NavLink
                    className="text-sm text-gray-scale-gray-500 leading-[150%] font-medium hover:text-branding-success hover:pl-3 transition-all duration-300"
                    to={subMenu.slug}
                  >
                    {subMenu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
