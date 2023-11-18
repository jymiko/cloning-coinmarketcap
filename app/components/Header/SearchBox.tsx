/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const searchBox = () => {
  const [ isShow, setIsShow ] = useState(false)

  return (
        <div>
            <div>
          <div
            className="flex justify-start items-center cursor-pointer space-x-2 text-gray-400 bg-gray-100 py-2 px-32 rounded-lg pl-4"
            onClick={() => setIsShow(!isShow)}
          >
            <div>
              <BiSearch />
            </div>
              <div className="text-sm">Search</div>
            </div>
        </div>
        <div className={`${isShow ? "block" : "hidden"} fixed lg:absolute top-0 lg:top-6 right-8 bg-white`}>
          <div className="flex justify-end pt-4 pr-0 border shadow-xl px-96 py-32 rounded-md">
            {/* <div className="px-4 text-gray-400">
              <BiSearch />
            </div>
            <input
              type="text"
              placeholder=""
            /> */}
            <div
              className="px-4 cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            >
              <IoClose />
            </div>
          </div>
        </div>
        </div>
  );
};

export default searchBox;