import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchProductCard from "./SearchProductCard";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (search.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data));
    }
  };

  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    setOpen(!open);
    setSearchResult(null);
    setSearch("");
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        <IoSearchOutline />
      </button>

      <div
        className={`searchArea fixed inset-0 h-screen overflow-auto bg-gray-scale-white/65 backdrop-blur-[1px] z-10 lg:p-20 transition-all duration-300 ${
          !open
            ? "translate-y-[100%] opacity-0 invisible"
            : "translate-y-[0%] opacity-100 visible"
        }`}
      >
        <button
          onClick={(e) => handleClose(e)}
          className="absolute top-6 right-6 text-3xl text-gray-scale-gray-600 w-10 h-10 leading-10 place-items-center rounded-full hover:text-branding-success hover:bg-branding-success/20 cursor-pointer"
        >
          <IoClose />
        </button>
        <div className="searchBox">
          <input
            value={search}
            onChange={(e) => handleSearch(e)}
            className="border-b border-gray-scale-gray-500 focus:border-branding-success outline-0 w-full pb-2 font-normal lg:text-2xl"
            type="search"
            placeholder="Start typing to shop now!"
          />
        </div>
        {search.length > 3 && (
          <div className="results grid lg:grid-cols-4 mt-8 gap-3">
            {searchResult?.products.length > 0
              ? searchResult.products.map((product) => (
                  <SearchProductCard key={product.id} product={product} />
                ))
              : "No products matched your search!"}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
