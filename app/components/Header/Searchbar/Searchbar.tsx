import { BiSearch } from "react-icons/bi"
import { BsFillSlashSquareFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Searchbar = () => {

    const [ isShow, setIsShow ] = useState(false)
    return(
        <div>
            <div
                className="flex justify-items-start items-center space-x-1 border rounded-lg px-2 py-2 cursor-pointer text-sm font-bold bg-gray-100 text-gray-400"
                onClick={() => setIsShow(!isShow)}
            >
                    <BiSearch />
                    <div className="pr-40">Search</div>
                    <BsFillSlashSquareFill />
            </div>
            <div
                className={`${
                isShow ? "block" : "hidden"
                } fixed top-6 bg-white rounded-lg shadow-xl z-0`}
            >
                <div className="flex justify-end pt-0 py-40 px-64 pr-4">
                    <IoClose className="cursor-pointer" onClick={() => setIsShow(!isShow)}/>
                </div>
            </div>
        </div>
    )
}

export default Searchbar