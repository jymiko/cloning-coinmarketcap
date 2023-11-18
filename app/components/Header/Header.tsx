import Image from "next/image"
import CoinMarketCap from "@/public/CoinMarketCap.svg"
import Link from "next/link"
import Searchbar from "./Searchbar/Searchbar"

const Header = () => {
    return(
        <div>
            <div className="flex justify-between items-center px-10 py-6 border-y-2">
                <div className="flex justify-start items-center space-x-10">
                    <div>
                        <Link href={"/"}>
                            <Image
                                src={CoinMarketCap}
                                alt="Coin Market Cap Icons"
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex flex-row space-x-4 font-bold text-sm cursor-pointer">
                            <li className="px-2 py-2 hover:text-blue-700 transition duration-150">Cryptocurrencies</li>
                            <li className="px-2 py-2 hover:text-blue-700 transition duration-150">Exchanges</li>
                            <li className="px-2 py-2 hover:text-blue-700 transition duration-150">Community</li>
                            <li className="px-2 py-2 hover:text-blue-700 transition duration-150">Products</li>
                            <li className="px-2 py-2 hover:text-blue-700 transition duration-150">Learn</li>
                        </ul>
                    </div>
                </div>
            <Searchbar />
            </div>
        </div>
    )
}

export default Header