import React from "react";
import { SlLocationPin } from "react-icons/sl";
import Select from "./../utils/Select";

const TopHeader = () => {
  const languages = [
    { value: "en", label: "Eng" },
    { value: "bn", label: "Bn" },
    { value: "es", label: "Esp" },
    { value: "fr", label: "Fra" },
  ];
  const currencies = [
    { value: "usd", label: "USD" },
    { value: "bdt", label: "BDT" },
    { value: "euro", label: "EUR" },
    { value: "cad", label: "CAD" },
  ];

  return (
    <div className="bg-gren-gray-scale-50 py-3">
      <div className="container grid lg:grid-cols-2">
        <div className="location flex items-center justify-start text-gray-scale-gray-700 leading-[130%]">
          <span className="text-[17px]">
            <SlLocationPin />
          </span>
          <p className="pl-2 text-xs">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div className="currency&language hidden lg:flex items-center justify-end gap-5">
          <Select options={languages} />
          <Select options={currencies} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
