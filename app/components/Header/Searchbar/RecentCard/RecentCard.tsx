import Image from "next/image"

const RecentCard = () => {

    return(
        <div className="flex flex-col justify-center items-center rounded-lg bg-gray-100 px-4 py-2">
            <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png" width={20} height={20} alt="Kaspa"/>
            <p className="text-xs font-semibold pl-2">Kaspa</p>
            <p className="text-[10px] font-medium text-gray-500 top-0 pl-1">KAS</p>
        </div>
    )
}

export default RecentCard