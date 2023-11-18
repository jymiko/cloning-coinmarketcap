import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import SearchBox from "./SearchBox"

const Header = () => {

  const [ isShow, setIsShow ] = useState(false)

  return (
    <div>
      <div className="flex justify-between border-y px-8 py-6 items-center">
        <div className="flex justify-between items-center space-x-12 text-sm font-bold cursor-pointer">
            <div className="w-full h-full">
              <Link href="/">
                <Image
                  src="/coinmarket.svg"
                  alt="Coin Market Cap"
                  width={180}
                  height={180}
                />
              </Link>
            </div>
            <div className="flex justify-between space-x-8">
              <div className="hover:text-blue-700 transition duration-150">
                Cryptocurrencies
              </div>
              <div className="hover:text-blue-700 transition duration-150">
                Exchanges
              </div>
              <div className="hover:text-blue-700 transition duration-150">
                Community
              </div>
              <div className="hover:text-blue-700 transition duration-150">
                Products
              </div>
              <div className="hover:text-blue-700 transition duration-150">
                Learn
              </div>
            </div>
        </div>
        <SearchBox />
      </div>
    </div>
  )
}

export default Header