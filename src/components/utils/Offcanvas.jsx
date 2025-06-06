import React from "react";
import { IoClose } from "react-icons/io5";

const Offcanvas = ({
  heading,
  children,
  showCanvas,
  closeOffcanvas,
  position,
}) => {
  return (
    <div
      onClick={(e) => {
        e.target.classList.contains("offcanvasArea") ? closeOffcanvas() : false;
      }}
      className={`offcanvasArea fixed inset-0 bg-black/30 transition-all duration-200 z-999 ${
        showCanvas ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`offcanvasContent w-full max-w-[300px] bg-white h-screen p-10 transition-all duration-300 ${
          !showCanvas
            ? `translate-x-[${position == "left" ? "-" : ""}100%] opacity-0`
            : "translate-x-[0%] opacity-100"
        } ${position}-0 absolute`}
      >
        {heading && (
          <div className="offcanvasHeading text-[20px] text-gray-scale-gray-900 leading-[150%] font-medium flex items-center justify-between pb-2">
            {heading}
            <button onClick={closeOffcanvas}>
              <IoClose />
            </button>
          </div>
        )}

        <div className="offCanvasBody pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Offcanvas;
