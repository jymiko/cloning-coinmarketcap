import Image from "next/image"

const RecentCard = () => {

    return(
        <div className="px-2 top-0 space-y-2 cursor-pointer">
            <div className="flex flex-col justify-center items-center rounded-lg bg-gray-100 px-6 py-2 space-y-1">
                <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png" width={30} height={30} alt="Kaspa"/>
                <p className="text-xs font-semibold pl-2">Kaspa</p>
                <p className="text-[10px] font-medium text-gray-500 top-0 pl-1">KAS</p>
            </div>
        </div>
    )
}

export default RecentCard