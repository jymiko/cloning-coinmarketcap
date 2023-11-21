import { BiSearch } from "react-icons/bi"
import { BsFillSlashSquareFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import TrendingCard from "./TrendingCard/TrendingCard";
import RecentCard from "./RecentCard/RecentCard";
import Image from "next/image";
import Fire from "@/public/Fire.svg"

const SearchModal = () => {

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
                } fixed top-6 right-10 bg-white rounded-lg shadow-lg z-0`}
            >
                <div className="flex justify-end items-center space-x-2 py-2 px-4">
                    <BiSearch />
                    <input type="text" placeholder="Search coin, pair contract address, exchange, or post" className="text-[10px] py-2 px-40 w-full pl-2 grow-0"/>
                    <IoClose className="cursor-pointer" onClick={() => setIsShow(!isShow)}/>
                </div>
                <div>
                    <div className="flex justify-normal space-x-2 px-4 py-2">
                        <div className="text-[10px] text-gray-600">Trending</div>
                        <Image src={Fire} alt="trending" />
                    </div>
                    <div className="pb-4">
                        <TrendingCard />
                        <TrendingCard />
                        <TrendingCard />
                        <TrendingCard />
                        <TrendingCard />
                        <TrendingCard />
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="flex justify-normal space-x-2">
                        <div className="text-[10px] text-gray-600">Recent searches</div>
                    </div>
                    <div className="flex justify-start space-x-2">
                        <RecentCard />
                        <RecentCard />
                        <RecentCard />
                    </div>
                </div>
                <div className="flex justify-between px-4 py-2 items-center bg-gray-100 space-x-14">
                    <div className="flex justify-between items-center space-x-1 text-white">
                        <div className="border px-2 py-1 rounded-md bg-gray-400 text-[10px] font-bold">TAB</div>
                        <div className="border px-1 py-1 rounded-md bg-gray-400 text-[10px] font-bold">↑</div>
                        <div className="border px-1 py-1 rounded-md bg-gray-400 text-[10px] font-bold">↓</div>
                        <div className="text-[10px] font-bold text-gray-400">
                            To Navigate
                        </div>
                    </div>
                    <div className="flex justify-between items-center space-x-1 text-white">
                        <div className="border px-2 py-1 rounded-md bg-gray-400 text-[10px] font-bold">ESC</div>
                        <div className="text-[10px] font-bold text-gray-400">
                            To Cancel
                        </div>
                    </div>
                    <div className="flex justify-between items-center space-x-1 text-white">
                        <div className="border px-2 py-1 rounded-md bg-gray-400 text-[10px] font-bold">↵</div>
                        <div className="text-[10px] font-bold text-gray-400">To Enter</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal