import React from "react";
import { FaTruckFast, FaHeadset } from "react-icons/fa6";
import { BsBoxSeam, BsBagCheck } from "react-icons/bs";

const CustomerServiceBox = () => {
  const customerServices = [
    {
      id: 1,
      icon: (
        <FaTruckFast className="text-[31px] lg:text-4xl mx-auto text-branding-success" />
      ),
      title: "Free Shipping",
      detail: "Free shipping with discount",
    },
    {
      id: 2,
      icon: (
        <FaHeadset className="text-[31px] lg:text-4xl mx-auto text-branding-success" />
      ),
      title: "Great Support 24/7",
      detail: "Instant access to Contact",
    },
    {
      id: 3,
      icon: (
        <BsBagCheck className="text-[31px] lg:text-4xl mx-auto text-branding-success" />
      ),
      title: "100% Secure Payment",
      detail: "We ensure your money is save",
    },
    {
      id: 4,
      icon: (
        <BsBoxSeam className="text-[31px] lg:text-4xl mx-auto text-branding-success" />
      ),
      title: "Money-Back Guarantee",
      detail: "30 days money-back",
    },
  ];

  return (
    <div className="container my-10 lg:my-0 border-b border-gray-scale-gray-50 grid lg:grid-cols-4 gap-7 lg:gap-[5px] bg-gray-scale-white items-center customerServiceBox-shadow">
      {customerServices.map((service) => (
        <div
          key={service.id}
          className="box text-center p-5 lg:p-[40px] lg:border-b-4 border-transparent hover:border-branding-success cursor-pointer"
        >
          <div className="icon">{service.icon}</div>
          <div className="content col-span-3">
            <h3 className="pt-2 lg:pt-4 pb-[5px] lg:pb-2 font-semibold leading-[120%] text-[14px] md:text-[16px] text-gren-gray-scale-900">
              {service.title}
            </h3>
            <p className="text-[12px] lg:text-[14px] leading-[150%] text-gray-scale-gray-400">
              {service.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerServiceBox;
