import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="">
      <form className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full "
        />
        <button className="btn btn-circle text-white bg-sky-500">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default Search;
