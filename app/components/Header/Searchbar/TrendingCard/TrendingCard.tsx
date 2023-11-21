import Image from "next/image"
import { useState } from "react"

const TrendingCard = () => {

    const [isShow, setIsShow] = useState(false)

    return(
        <div className="px-2 top-0 space-y-2 cursor-pointer">
            <div className="flex justify-between rounded-lg hover:bg-gray-100 px-2 py-2">
                <div className="flex items-center">
                    <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png" width={20} height={20} alt="Kaspa" className="" />
                    <p className="text-base font-semibold pl-2">Kaspa</p>
                    <p className="text-xs font-medium text-gray-500 top-0 pl-1">KAS</p>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center space-x-4">
                        <div className="text-xs font-semibold text-gray-400">Select </div>
                        <div className="border rounded-md bg-gray-300 px-1 py-1 text-xs font-bold">↵</div>
                    </div>
                    <div className={`${
                        isShow ? "block" : "hidden"
                        }`}
                    >
                        <div className="text-xs font-semibold text-gray-400" onKeyDown={() => setIsShow(!isShow)}>#26</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard